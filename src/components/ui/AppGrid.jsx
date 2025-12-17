import React from 'react';
import { Grid } from '@mui/material';

export const AppGrid = React.forwardRef(function AppGrid(props, ref) {
  return <Grid ref={ref} {...props} />;
});
