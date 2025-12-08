import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Chip, Link, Stack, Typography } from '@mui/material';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

export default function CaseStudyHeaderMeta({ hero, compact = false }) {
  const { eyebrow, title, subtitle, tags } = hero || {};
  const prefersReducedMotion = usePrefersReducedMotion();

  const transition = prefersReducedMotion ? 'none' : 'opacity 160ms ease, transform 160ms ease';

  return (
    <Stack spacing={2} sx={{ transition, transform: compact ? 'translateY(-4px)' : 'none' }}>
      <Link component={RouterLink} to="/work" underline="hover" aria-label="Back to Work page">
        ← Back to work
      </Link>

      <Stack spacing={1.5}>
        {eyebrow ? (
          <Typography variant="overline" color="text.secondary" sx={{ transition }}>
            {eyebrow}
          </Typography>
        ) : null}
        <Typography
          component="h1"
          variant="h1"
          color="text.primary"
          sx={{ transition }}
        >
          {title}
        </Typography>
        {subtitle ? (
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: { md: '80ch' }, opacity: compact ? 0.88 : 1, transition }}
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
              transition,
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
