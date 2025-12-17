import React from 'react';
import { Breadcrumbs } from '@mui/material';

const AppBreadcrumbs = React.forwardRef(function AppBreadcrumbs(props, ref) {
  return <Breadcrumbs ref={ref} separator="/" {...props} />;
});

export default AppBreadcrumbs;
