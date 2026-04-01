import React from 'react';

export default function ServiceDetailClient() {
  return (
    <section className="service-detail-layout" aria-label="Service detail">
      <article className="service-detail-main">
        <h2>Amazon Redshift</h2>
        <p>
          Currently attached for analytics workloads. This remains available, but governance flags apply in
          transactional app contexts.
        </p>
      </article>
      <aside className="service-detail-consequence-panel" aria-label="Decision impact and governance summary">
        <div className="decision-group">
          <p className="decision-label">Governance</p>
          <p className="decision-value">Exception review required for this app type.</p>
        </div>
        <div className="decision-group">
          <p className="decision-label">Impact</p>
          <p className="decision-value">Can introduce latency and consistency tradeoffs for payment writes.</p>
        </div>
        <div className="decision-group">
          <p className="decision-label">Estimated monthly cost</p>
          <p className="decision-value">$1,420</p>
        </div>
        <button className="primary-cta" type="button">
          Request exception
        </button>
      </aside>
    </section>
  );
}
