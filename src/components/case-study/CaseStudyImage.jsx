import * as React from 'react';
import { Box } from '@mui/material';

export default function CaseStudyImage({ src, alt }) {
  if (!src) return null;

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: '100%',
        maxWidth: '100%',
        borderRadius: 1,
        display: 'block',
        boxShadow: (t) => t.customShadows?.card,
      }}
    />
  );
}
