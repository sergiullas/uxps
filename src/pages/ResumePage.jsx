import * as React from 'react';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import ResumeTabs from '../components/resume/ResumeTabs.jsx';
import { RESUME } from '../content/resume.js';
import { siteMeta } from '../content/siteMeta.js';
import '../styles/print-resume.css';

export default function ResumePage() {
  const metaDescription = RESUME.summary?.intro?.[0] || 'Resume overview';

  return (
    <>
      <Helmet>
        <title>{`Resume | ${siteMeta.title}`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`${siteMeta.url}/resume`} />
      </Helmet>

      <Container maxWidth="md" component="main" sx={{ py: { xs: 6, md: 8 } }}>
        <Box className="resume-print-scope">
          <Stack spacing={{ xs: 3, md: 4 }}>
            <HeaderBlock description={metaDescription} />
            <Divider />
            <ResumeTabs resumeData={RESUME} />
          </Stack>
        </Box>
      </Container>
    </>
  );
}

function HeaderBlock({ description }) {
  return (
    <Stack spacing={1.5}>
      <Typography component="h1" variant="h1" color="text.primary">
        {siteMeta.siteName || siteMeta.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: { md: '72ch' } }}>
        {description}
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2 }}
        color="text.primary"
        alignItems={{ sm: 'center' }}
      >
        <Typography variant="body2">{siteMeta.location}</Typography>
        <Typography variant="body2" aria-hidden="true">
          ·
        </Typography>
        <Typography variant="body2">
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
        </Typography>
        <Typography variant="body2" aria-hidden="true">
          ·
        </Typography>
        <Typography variant="body2">
          <a href={siteMeta.social.linkedin}>LinkedIn</a>
        </Typography>
      </Stack>

      <Box>
        <Button variant="outlined" onClick={() => window.print()} sx={{ mt: 1 }}>
          Print resume
        </Button>
      </Box>
    </Stack>
  );
}
