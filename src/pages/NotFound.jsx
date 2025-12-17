import React from 'react';
import { AppStack as Stack, AppTypography as Typography } from '../components/ui';
import { Helmet } from 'react-helmet-async';

import AppSection from '../components/ui/AppSection.jsx';
import { siteMeta } from '../content/siteMeta.js';

export default function NotFound() {
  return (
    <AppSection component="section" aria-labelledby="not-found-heading">
      <Helmet>
        <title>Page not found — {siteMeta.author}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Stack spacing={1.5}>
        <Typography id="not-found-heading" component="h1" variant="h2" color="text.primary">
          {siteMeta.notFound.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {siteMeta.notFound.message}
        </Typography>
      </Stack>
    </AppSection>
  );
}
