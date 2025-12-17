import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getFocusRingStyles } from '../../theme/focusStyles.js';

export const AppTabs = React.forwardRef(function AppTabs(props, ref) {
  const theme = useTheme();
  return (
    <Tabs
      ref={ref}
      TabIndicatorProps={{
        sx: {
          height: 3,
          backgroundColor: theme.palette.primary.main,
        },
      }}
      {...props}
    />
  );
});

export const AppTab = React.forwardRef(function AppTab(props, ref) {
  const theme = useTheme();
  const focusStyles = getFocusRingStyles(theme);
  return (
    <Tab
      ref={ref}
      sx={{
        textTransform: 'none',
        ...focusStyles,
        '&:focus-visible': {
          ...focusStyles['&:focus-visible'],
          outline: 'none',
        },
      }}
      {...props}
    />
  );
});
