import React from 'react';
import { Typography } from '@mui/material';

const AppTypography = React.forwardRef(function AppTypography(props, ref) {
  return <Typography ref={ref} {...props} />;
});

export default AppTypography;
