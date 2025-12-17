import React from 'react';
import { Stack } from '@mui/material';

const AppStack = React.forwardRef(function AppStack({ spacing = 2, direction = 'column', ...props }, ref) {
  return <Stack ref={ref} spacing={spacing} direction={direction} {...props} />;
});

export default AppStack;
