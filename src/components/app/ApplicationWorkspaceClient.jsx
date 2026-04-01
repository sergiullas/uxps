import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ApplicationInsights from './ApplicationInsights.jsx';
import ServiceDetailClient from './ServiceDetailClient.jsx';

const appContext = {
  appName: 'Payments API',
  workloadType: 'transactional',
  hasRedshift: true,
  productionDbMultiAz: false,
  rdsUtilizationPercent: 22,
  hasDiscouragedService: true,
};

const allInsights = [
  {
    id: 'governance-risk',
    title: 'Selected service requires exception review',
    description:
      'This service does not meet the current approved usage criteria for this application type.',
    actionLabel: 'Review approved alternative',
    category: 'governance',
    priority: 1,
  },
  {
    id: 'reliability-ha',
    title: 'Production database is not configured for high availability',
    description: 'A single-zone failure could interrupt payment processing.',
    actionLabel: 'Enable multi-AZ',
    category: 'reliability',
    priority: 2,
  },
  {
    id: 'architecture-fit',
    title: 'Redshift is not suited for this workload',
    description: 'Payments API is transactional and depends on relational consistency.',
    actionLabel: 'Review RDS alternative',
    category: 'architecture',
    priority: 3,
  },
  {
    id: 'cost-rightsize',
    title: 'RDS instance is over-provisioned',
    description: 'Current usage suggests you are paying for more capacity than the app needs.',
    actionLabel: 'Resize instance',
    category: 'cost',
    priority: 4,
  },
];

function getApplicationInsights(context) {
  const matches = allInsights.filter((insight) => {
    if (insight.category === 'governance') return context.hasDiscouragedService;
    if (insight.category === 'reliability') return !context.productionDbMultiAz;
    if (insight.category === 'architecture') return context.workloadType === 'transactional' && context.hasRedshift;
    if (insight.category === 'cost') return context.rdsUtilizationPercent < 35;
    return false;
  });

  return matches.sort((a, b) => a.priority - b.priority).slice(0, 3);
}

export default function ApplicationWorkspaceClient() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') ?? 'overview';
  const insights = getApplicationInsights(appContext);
  const [actionMessage, setActionMessage] = React.useState('');

  const onInsightAction = (insight) => {
    if (insight.category === 'architecture' || insight.category === 'governance') {
      setSearchParams({ tab: 'services' });
      return;
    }
    setActionMessage(`${insight.actionLabel} opened (mocked action).`);
  };

  return (
    <div className="workspace-page">
      <header className="workspace-header">
        <div>
          <p className="workspace-eyebrow">Application</p>
          <h1>Payments API</h1>
          <p className="workspace-subtitle">Production · us-east-1 · AWS</p>
        </div>
      </header>

      <nav className="workspace-tabs" aria-label="Application workspace tabs">
        {['overview', 'logs', 'deployments', 'services'].map((tabName) => (
          <button
            key={tabName}
            type="button"
            className={`workspace-tab${tab === tabName ? ' is-active' : ''}`}
            onClick={() => setSearchParams({ tab: tabName })}
          >
            {tabName === 'logs' ? 'Logs & metrics' : tabName[0].toUpperCase() + tabName.slice(1)}
          </button>
        ))}
      </nav>

      {tab === 'overview' && (
        <section>
          <div className="metrics-grid">
            <article className="metric-card"><p>Error rate</p><strong>0.04%</strong></article>
            <article className="metric-card"><p>P95 latency</p><strong>212ms</strong></article>
            <article className="metric-card"><p>Monthly spend</p><strong>$48.2k</strong></article>
          </div>
          <ApplicationInsights insights={insights} onAction={onInsightAction} />
          {actionMessage ? <p className="action-message">{actionMessage}</p> : null}
          <article className="overview-card">
            <h2>Service posture</h2>
            <p>Core dependencies remain healthy. One governed exception is currently active.</p>
          </article>
        </section>
      )}

      {tab === 'services' && (
        <section>
          <div className="services-header">
            <h2>Services</h2>
            <button type="button" className="primary-cta">Add service</button>
          </div>
          <ul className="service-list" aria-label="Dependency list">
            <li>Amazon RDS (PostgreSQL) · Production</li>
            <li>Amazon Redshift · Exception required</li>
            <li>AWS Lambda · Approved</li>
          </ul>
          <ServiceDetailClient />
        </section>
      )}

      {tab !== 'overview' && tab !== 'services' && (
        <section className="overview-card">
          <h2>{tab === 'logs' ? 'Logs & metrics' : 'Deployments'}</h2>
          <p>This area is unchanged in Phase 5.</p>
        </section>
      )}
    </div>
  );
}
