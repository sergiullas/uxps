import * as React from 'react';
import { AppBox as Box, AppStack as Stack, AppTypography as Typography } from '../ui';
import CertificationCard from './CertificationCard.jsx';

export default function ResumeCertifications({ certifications }) {
  const items = certifications?.items || [];

  if (!items.length) return null;

  return (
    <Box component="section" aria-labelledby="resume-certifications-heading" id="certifications">
      <Typography
        id="resume-certifications-heading"
        component="h2"
        variant="h3"
        color="text.primary"
        sx={{ mb: 2 }}
      >
        Certifications
      </Typography>

      <Stack spacing={2} component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {items.map((certification) => (
          <Box key={certification.id} component="li" sx={{ transition: (t) => t.transitions.create(['transform', 'box-shadow'], { duration: t.transitions.duration.shorter }) }}>
            <CertificationCard certification={certification} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
