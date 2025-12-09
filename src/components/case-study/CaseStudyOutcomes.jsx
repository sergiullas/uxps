import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export default function CaseStudyOutcomes({ outcomes = {} }) {
  const { summary = [], metrics = [], highlights = [] } = outcomes;

  return (
    <Box
      sx={(t) => ({
        border: `1px solid ${t.palette.divider}`,
        borderRadius: t.shape.borderRadius,
        backgroundColor: t.palette.background.paper,
        p: { xs: t.spacing(2.5), md: t.spacing(3) },
      })}
    >
      <Stack spacing={2.5}>
        <Stack spacing={1.5}>
          <Typography component="h2" variant="h4" color="text.primary">
            Outcomes
          </Typography>
          {summary.map((paragraph, index) => (
            <Typography key={paragraph + index} variant="body1" color="text.secondary">
              {paragraph}
            </Typography>
          ))}
        </Stack>

        {metrics.length ? (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
              gap: { xs: 2, sm: 2.5 },
            }}
          >
            {metrics.map((metric) => (
              <Box
                key={metric.label}
                sx={(t) => ({
                  border: `1px solid ${t.palette.divider}`,
                  borderRadius: t.shape.borderRadius,
                  p: { xs: t.spacing(2), md: t.spacing(2.5) },
                  backgroundColor: t.palette.background.default,
                })}
              >
                <Typography variant="overline" color="var(--context-accent)">
                  {metric.label}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {metric.value}
                </Typography>
                {metric.note ? (
                  <Typography variant="body2" color="text.secondary">
                    {metric.note}
                  </Typography>
                ) : null}
              </Box>
            ))}
          </Box>
        ) : null}

        {highlights.length ? (
          <Box>
            <Typography variant="overline" color="var(--context-accent)">
              Highlights
            </Typography>
            <Box component="ul" sx={{ m: 0, mt: 0.5, pl: 3 }}>
              {highlights.map((highlight) => (
                <Box component="li" key={highlight}>
                  <Typography variant="body2" color="text.secondary">
                    {highlight}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
}
