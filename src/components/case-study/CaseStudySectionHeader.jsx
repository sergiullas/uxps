import * as React from 'react';
import { Stack, Typography } from '@mui/material';

export default function CaseStudySectionHeader({ eyebrow, title, kicker }) {
  return (
    <Stack spacing={0.75}>
      {eyebrow ? (
        <Typography variant="overline" color="var(--context-accent)">
          {eyebrow}
        </Typography>
      ) : null}
      <Typography component="h2" variant="h2" color="text.primary">
        {title}
      </Typography>
      {kicker ? (
        <Typography variant="subtitle2" color="text.secondary">
          {kicker}
        </Typography>
      ) : null}
    </Stack>
  );
}
