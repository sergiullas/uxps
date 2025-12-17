import React from 'react';
import { Box } from '@mui/material';

const AppBox = React.forwardRef(function AppBox(props, ref) {
  return <Box ref={ref} {...props} />;
});

export default AppBox;
