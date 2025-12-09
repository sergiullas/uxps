import * as React from 'react';
import { Box, Typography } from '@mui/material';
import CaseStudyImage from './CaseStudyImage.jsx';
import BeforeAfterSlider from '../media/BeforeAfterSlider.jsx';

export default function CaseStudyFigure({ media }) {
  if (!media) return null;
  const { src, alt, caption, type } = media;

  if (type === 'beforeAfter') {
    return <BeforeAfterSlider {...media} />;
  }

  return (
    <Box component="figure" sx={{ m: 0, display: 'grid', gap: 1.25 }}>
      <CaseStudyImage src={src} alt={alt} />
      {caption ? (
        <Typography component="figcaption" variant="caption" color="text.secondary">
          {caption}
        </Typography>
      ) : null}
    </Box>
  );
}
