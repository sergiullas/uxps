import * as React from 'react';
import { Box } from '@mui/material';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

export default function CaseStudyTOCIndicator({ top = 0, height = 0, isVisible = false }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Box
      aria-hidden
      sx={(t) => ({
        position: 'absolute',
        left: 0,
        top: 0,
        width: 3,
        borderRadius: t.shape.borderRadius,
        backgroundColor: t.palette.primary.main,
        height,
        transform: `translateY(${top}px)`,
        opacity: isVisible ? 1 : 0,
        transition: prefersReducedMotion
          ? 'none'
          : 'transform 160ms ease-out, height 160ms ease-out, opacity 120ms ease-out',
      })}
    />
  );
}
