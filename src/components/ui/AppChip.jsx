import React from 'react';
import { Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getFocusRingStyles } from '../../theme/focusStyles.js';

const AppChip = React.forwardRef(function AppChip({ size = 'medium', ...props }, ref) {
  const theme = useTheme();
  return (
    <Chip
      ref={ref}
      size={size}
      sx={{
        borderRadius: theme.shape.borderRadius / 2,
        ...getFocusRingStyles(theme),
        '&:focus-visible': {
          ...getFocusRingStyles(theme)['&:focus-visible'],
          outline: 'none',
        },
      }}
      {...props}
    />
  );
});

export default AppChip;
