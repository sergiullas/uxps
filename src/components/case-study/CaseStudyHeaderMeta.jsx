import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Chip, Link, Stack, Typography } from '@mui/material';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

export default function CaseStudyHeaderMeta({ hero, compact = false, brand }) {
  const { eyebrow, title, subtitle, tags } = hero || {};
  const prefersReducedMotion = usePrefersReducedMotion();

  const transformTransition = prefersReducedMotion ? 'none' : 'transform 160ms ease';
  const opacityTransition = prefersReducedMotion ? 'none' : 'opacity 160ms ease';
  const applyHeaderBrand = brand?.applyToHeader;

  return (
    <Stack
      spacing={2}
      sx={{
        transition: transformTransition,
        transform: compact ? 'translateY(-4px)' : 'none',
        borderBottom: applyHeaderBrand ? `3px solid var(--context-primary)` : 'none',
        pb: applyHeaderBrand ? { xs: 2, md: 2.5 } : 0,
      }}
    >
      <Link
        component={RouterLink}
        to="/work"
        underline="hover"
        aria-label="Back to Work page"
        sx={{ color: applyHeaderBrand ? 'var(--context-primary)' : undefined }}
      >
        ← Back to work
      </Link>

      <Stack spacing={1.5}>
        {eyebrow ? (
          <Typography variant="overline" color={applyHeaderBrand ? 'var(--context-accent)' : 'text.secondary'}>
            {eyebrow}
          </Typography>
        ) : null}
        <Typography
          component="h1"
          variant="h1"
          color="text.primary"
        >
          {title}
        </Typography>
        {subtitle ? (
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: { md: '80ch' }, opacity: compact ? 0.88 : 1, transition: opacityTransition }}
          >
            {subtitle}
          </Typography>
        ) : null}
        {tags?.length ? (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              pt: 0.5,
              opacity: compact ? 0.9 : 1,
              transition: opacityTransition,
            }}
          >
            {tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" color="default" />
            ))}
          </Box>
        ) : null}
      </Stack>
    </Stack>
  );
}
