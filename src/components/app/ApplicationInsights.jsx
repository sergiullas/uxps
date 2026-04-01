import React from 'react';

function ApplicationInsightItem({ insight, onAction }) {
  return (
    <li className="application-insight-item">
      <div>
        <h3 className="application-insight-title">{insight.title}</h3>
        <p className="application-insight-description">{insight.description}</p>
      </div>
      <button
        className="application-insight-action"
        type="button"
        onClick={() => onAction(insight)}
        aria-label={`${insight.actionLabel} for ${insight.title}`}
      >
        {insight.actionLabel}
      </button>
    </li>
  );
}

export default function ApplicationInsights({ insights, onAction }) {
  if (!insights?.length) return null;

  return (
    <section className="application-insights" aria-labelledby="application-insights-heading">
      <h2 id="application-insights-heading" className="application-insights-heading">
        Application insights
      </h2>
      <ul className="application-insights-list">
        {insights.map((insight) => (
          <ApplicationInsightItem key={insight.id} insight={insight} onAction={onAction} />
        ))}
      </ul>
    </section>
  );
}
