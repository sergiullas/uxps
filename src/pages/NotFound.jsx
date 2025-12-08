import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import AppSection from '../components/ui/AppSection.jsx';

export default function NotFound() {
  return (
    <AppSection component="section" aria-labelledby="not-found-heading">
      <Helmet>
        <title>Page not found — Sergio Antezana</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Stack spacing={1.5}>
        <Typography id="not-found-heading" component="h1" variant="h2" color="text.primary">
          404 — Page not found
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The page you are looking for does not exist yet. Please return to the home page or use the navigation to
          explore published sections.
        </Typography>
      </Stack>
    </AppSection>
  );
}
