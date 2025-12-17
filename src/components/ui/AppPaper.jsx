import React from 'react';
import { Paper } from '@mui/material';

const AppPaper = React.forwardRef(function AppPaper(props, ref) {
  return <Paper ref={ref} elevation={1} {...props} />;
});

export default AppPaper;
