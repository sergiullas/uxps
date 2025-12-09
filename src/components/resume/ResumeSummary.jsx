import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function ResumeSummary({ summary }) {
  const intro = summary?.intro || [];
  const highlights = summary?.highlights || [];

  return (
    <Box component="section" aria-labelledby="resume-summary-heading">
      <Typography
        id="resume-summary-heading"
        component="h2"
        variant="h3"
        color="text.primary"
        sx={{ mb: 2 }}
      >
        Summary
      </Typography>

      <Box sx={{ display: 'grid', gap: 1.5 }}>
        {intro.map((paragraph, index) => (
          <Typography key={index} variant="body1" color="text.primary">
            {paragraph}
          </Typography>
        ))}
      </Box>

      {highlights.length ? (
        <Box component="ul" sx={{ mt: 2, pl: 3, m: 0, display: 'grid', gap: 1 }}>
          {highlights.map((item) => (
            <Box component="li" key={item}>
              <Typography variant="body1" color="text.secondary">
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}
