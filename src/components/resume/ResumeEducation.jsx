import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export default function ResumeEducation({ education }) {
  const items = education?.items || [];

  return (
    <Box component="section" aria-labelledby="resume-education-heading">
      <Typography
        id="resume-education-heading"
        component="h2"
        variant="h3"
        color="text.primary"
        sx={{ mb: 2 }}
      >
        Education
      </Typography>

      <Stack spacing={1.5} component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {items.map((item) => (
          <Box key={item.id} component="li" className="resume-print-card">
            <Typography component="h3" variant="h6" color="text.primary">
              {item.degree}, {item.school}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.timeframeLabel} · {item.location}
            </Typography>
            {item.details?.length ? (
              <Box component="ul" sx={{ mt: 1, pl: 2.75, m: 0, display: 'grid', gap: 0.5 }}>
                {item.details.map((detail, index) => (
                  <Box key={index} component="li">
                    <Typography variant="body2" color="text.secondary">
                      {detail}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ) : null}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
