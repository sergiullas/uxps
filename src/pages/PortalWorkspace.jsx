import React from 'react';
import AppShell from '../components/app/AppShell.jsx';
import ApplicationWorkspaceClient from '../components/app/ApplicationWorkspaceClient.jsx';

export default function PortalWorkspace() {
  return (
    <AppShell>
      <ApplicationWorkspaceClient />
    </AppShell>
  );
}
