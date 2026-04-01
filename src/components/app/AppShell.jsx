import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SidebarAccountPanel() {
  return (
    <button className="sidebar-account-panel" type="button" aria-label="Open account menu for Devin">
      <span className="sidebar-account-name">Devin</span>
      <span className="sidebar-account-meta">Application Engineer</span>
    </button>
  );
}

const navigationItems = [
  { href: '/portal', label: 'Overview' },
  { href: '/portal?tab=services', label: 'Services' },
  { href: '/portal?tab=logs', label: 'Logs & metrics' },
  { href: '/portal?tab=deployments', label: 'Deployments' },
];

export default function AppShell({ children }) {
  const location = useLocation();

  return (
    <div className="app-shell">
      <aside className="app-shell-sidebar" aria-label="Workspace navigation">
        <div>
          <p className="app-shell-brand">Payments Workspace</p>
          <nav className="app-shell-nav">
            {navigationItems.map((item) => {
              const isActive = location.pathname + location.search === item.href;
              return (
                <Link
                  key={item.href}
                  className={`app-shell-nav-link${isActive ? ' is-active' : ''}`}
                  to={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <SidebarAccountPanel />
      </aside>
      <main className="app-shell-content">{children}</main>
    </div>
  );
}
