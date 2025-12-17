import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

export const AppAlert = React.forwardRef(function AppAlert(props, ref) {
  return <Alert ref={ref} variant="outlined" {...props} />;
});

export const AppAlertTitle = React.forwardRef(function AppAlertTitle(props, ref) {
  return <AlertTitle ref={ref} {...props} />;
});
