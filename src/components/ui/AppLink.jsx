import React from 'react';
import { Link as MuiLink } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getFocusRingStyles } from '../../theme/focusStyles.js';

const AppLink = React.forwardRef(function AppLink(
  { href, underline = 'hover', external = false, rel, target, sx = {}, ...props },
  ref,
) {
  const theme = useTheme();
  const focusStyles = getFocusRingStyles(theme);
  const isExternal = external || (href && /^https?:\/\//.test(href));

  return (
    <MuiLink
      ref={ref}
      href={href}
      underline={underline}
      rel={isExternal ? rel ?? 'noopener noreferrer' : rel}
      target={isExternal ? target ?? '_blank' : target}
      sx={{
        color: 'inherit',
        ...focusStyles,
        '&:focus-visible': {
          ...focusStyles['&:focus-visible'],
          outline: 'none',
        },
        ...sx,
      }}
      {...props}
    />
  );
});

export default AppLink;
