import React from 'react';
import { Drawer } from '@mui/material';

const AppDrawer = React.forwardRef(function AppDrawer(props, ref) {
  return <Drawer ref={ref} {...props} />;
});

export default AppDrawer;
