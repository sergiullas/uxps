import React from 'react';
import { Card, CardContent, CardActionArea } from '@mui/material';

export const AppCard = React.forwardRef(function AppCard(props, ref) {
  return <Card ref={ref} elevation={1} {...props} />;
});

export const AppCardContent = React.forwardRef(function AppCardContent(props, ref) {
  return <CardContent ref={ref} {...props} />;
});

export const AppCardActionArea = React.forwardRef(function AppCardActionArea(props, ref) {
  return <CardActionArea ref={ref} {...props} />;
});
