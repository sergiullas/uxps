import * as React from 'react';
import { Box } from '@mui/material';

export default function AppSection({ id, component = 'section', maxWidth = '1280px', sx = {}, ...props }) {
  return (
    <Box
      component={component}
      id={id}
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, sm: 6, md: 8 },
        maxWidth,
        mx: 'auto',
        ...sx,
      }}
      {...props}
    />
  );
}
