import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getFocusRingStyles } from '../../theme/focusStyles.js';

export const AppToggleButtonGroup = React.forwardRef(function AppToggleButtonGroup(props, ref) {
  return <ToggleButtonGroup ref={ref} exclusive {...props} />;
});

export const AppToggleButton = React.forwardRef(function AppToggleButton(props, ref) {
  const theme = useTheme();
  const focusStyles = getFocusRingStyles(theme);
  return (
    <ToggleButton
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
