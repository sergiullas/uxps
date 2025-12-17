import React from 'react';
import { Tooltip } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const AppTooltip = ({ children, enterDelay, leaveDelay, disableTouchListener = true, ...props }) => {
  const theme = useTheme();
  const isTouch = useMediaQuery('(hover: none)');

  return (
    <Tooltip
      enterDelay={enterDelay ?? theme.transitions.duration.short}
      leaveDelay={leaveDelay ?? theme.transitions.duration.short}
      disableFocusListener={false}
      disableTouchListener={isTouch || disableTouchListener}
      arrow
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default AppTooltip;
