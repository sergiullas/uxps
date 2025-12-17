import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export const AppDialog = React.forwardRef(function AppDialog(props, ref) {
  return <Dialog ref={ref} {...props} />;
});

export const AppDialogActions = React.forwardRef(function AppDialogActions(props, ref) {
  return <DialogActions ref={ref} {...props} />;
});

export const AppDialogContent = React.forwardRef(function AppDialogContent(props, ref) {
  return <DialogContent ref={ref} {...props} />;
});

export const AppDialogTitle = React.forwardRef(function AppDialogTitle(props, ref) {
  return <DialogTitle ref={ref} {...props} />;
});
