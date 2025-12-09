import * as React from 'react';
import { Box, Typography } from '@mui/material';
import ReactCompareImage from 'react-compare-image';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';
import CaseStudyImage from '../case-study/CaseStudyImage.jsx';

export default function BeforeAfterSlider({ before, after, alt, caption, beforeLabel = 'Before', afterLabel = 'After' }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const showStatic = prefersReducedMotion || !after;

  if (showStatic) {
    return (
      <Box component="figure" sx={{ m: 0, display: 'grid', gap: 1.25 }}>
        <CaseStudyImage src={before} alt={alt || `${beforeLabel} view`} />
        <Typography variant="caption" color="text.secondary">
          {caption || `${beforeLabel} view`}
        </Typography>
      </Box>
    );
  }

  return (
    <Box component="figure" sx={{ m: 0, display: 'grid', gap: 1.25 }}>
      <ReactCompareImage
        leftImage={before}
        rightImage={after}
        leftImageLabel={beforeLabel}
        rightImageLabel={afterLabel}
        leftImageAlt={alt || `${beforeLabel} view`}
        rightImageAlt={alt || `${afterLabel} view`}
        handle={<SliderHandle />}
        sliderLineColor="var(--context-primary)"
        hover={false}
      />
      {caption ? (
        <Typography component="figcaption" variant="caption" color="text.secondary">
          {caption}
        </Typography>
      ) : null}
    </Box>
  );
}

function SliderHandle() {
  return (
    <Box
      role="presentation"
      aria-hidden
      sx={(t) => ({
        width: 32,
        height: 32,
        borderRadius: '50%',
        backgroundColor: 'var(--context-primary)',
        border: `2px solid ${t.palette.background.paper}`,
        boxShadow: t.customShadows?.card,
      })}
    />
  );
}
