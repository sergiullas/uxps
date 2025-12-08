import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Stack, Typography } from '@mui/material';

export default function CaseStudyNotFound() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Stack spacing={2}>
        <Typography component="h1" variant="h2" color="text.primary">
          Case study not found
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The case study you are looking for is unavailable. Please return to the work page to explore published projects.
        </Typography>
        <Link component={RouterLink} to="/work" underline="hover" color="primary" sx={{ fontWeight: 600 }}>
          Back to work
        </Link>
      </Stack>
    </Box>
  );
}
