import * as React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getFocusRingStyles } from '../../theme/focusStyles.js';

const AppButton = React.forwardRef(function AppButton({ disableHoverLift = false, ...props }, ref) {
  const theme = useTheme();
  const focusStyles = getFocusRingStyles(theme);

  return (
    <Button
      variant="contained"
      disableElevation
      ref={ref}
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

export default AppButton;
