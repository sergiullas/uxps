import React from 'react';
import { Container } from '@mui/material';

const AppContainer = React.forwardRef(function AppContainer({ maxWidth = 'lg', disableGutters = false, ...props }, ref) {
  return <Container ref={ref} maxWidth={maxWidth} disableGutters={disableGutters} {...props} />;
});

export default AppContainer;
