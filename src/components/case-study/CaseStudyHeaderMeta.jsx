import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Chip, Link, Stack, Typography } from '@mui/material';

export default function CaseStudyHeaderMeta({ hero }) {
  const { eyebrow, title, subtitle, tags } = hero || {};

  return (
    <Stack spacing={2}>
      <Link component={RouterLink} to="/work" underline="hover" aria-label="Back to Work page">
        ← Back to work
      </Link>

      <Stack spacing={1.5}>
        {eyebrow ? (
          <Typography variant="overline" color="text.secondary">
            {eyebrow}
          </Typography>
        ) : null}
        <Typography component="h1" variant="h1" color="text.primary">
          {title}
        </Typography>
        {subtitle ? (
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: { md: '80ch' } }}>
            {subtitle}
          </Typography>
        ) : null}
        {tags?.length ? (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pt: 0.5 }}>
            {tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" color="default" />
            ))}
          </Box>
        ) : null}
      </Stack>
    </Stack>
  );
}
