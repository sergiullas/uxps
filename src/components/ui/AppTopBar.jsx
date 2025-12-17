import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

export const AppTopBar = React.forwardRef(function AppTopBar(props, ref) {
  return <AppBar ref={ref} position="sticky" color="transparent" elevation={0} {...props} />;
});

export const AppToolbar = React.forwardRef(function AppToolbar(props, ref) {
  return <Toolbar ref={ref} disableGutters {...props} />;
});
