import React from 'react';
import { Divider } from '@mui/material';

const AppDivider = React.forwardRef(function AppDivider(props, ref) {
  return <Divider ref={ref} {...props} />;
});

export default AppDivider;
