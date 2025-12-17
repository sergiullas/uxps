import React from 'react';
import { Avatar } from '@mui/material';

const AppAvatar = React.forwardRef(function AppAvatar(props, ref) {
  return <Avatar ref={ref} {...props} />;
});

export default AppAvatar;
