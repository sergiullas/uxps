import React from 'react';
import { TextField } from '@mui/material';

const AppTextField = React.forwardRef(function AppTextField(props, ref) {
  return <TextField ref={ref} fullWidth margin="dense" {...props} />;
});

export default AppTextField;
