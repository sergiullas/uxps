import React from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getFocusRingStyles } from '../../theme/focusStyles.js';

const AppIconButton = React.forwardRef(function AppIconButton({ 'aria-label': ariaLabel, disableHoverLift = false, ...props }, ref) {
  const theme = useTheme();
  const focusStyles = getFocusRingStyles(theme);

  return (
    <IconButton
      ref={ref}
      aria-label={ariaLabel}
      sx={{
        ...focusStyles,
        '&:focus-visible': {
          ...focusStyles['&:focus-visible'],
          outline: 'none',
        },
        transition: `transform ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeOut}`,
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
          transform: 'none',
        },
        '&:hover': disableHoverLift
          ? {}
          : {
              transform: `translateY(-${theme.custom?.interaction?.hoverLift ?? 4}px)`,
            },
      }}
      {...props}
    />
  );
});

export default AppIconButton;
