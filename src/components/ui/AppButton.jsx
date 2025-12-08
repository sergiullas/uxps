import * as React from 'react';
import { Button } from '@mui/material';

export default React.forwardRef(function AppButton(props, ref) {
  return <Button variant="contained" disableElevation {...props} ref={ref} />;
});
