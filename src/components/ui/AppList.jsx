import React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getFocusRingStyles } from '../../theme/focusStyles.js';

export const AppList = React.forwardRef(function AppList(props, ref) {
  return <List ref={ref} {...props} />;
});

export const AppListItemButton = React.forwardRef(function AppListItemButton(props, ref) {
  const theme = useTheme();
  const focusStyles = getFocusRingStyles(theme);
  return (
    <ListItemButton
      ref={ref}
      sx={{
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

export const AppListItemText = React.forwardRef(function AppListItemText(props, ref) {
  return <ListItemText ref={ref} {...props} />;
});
