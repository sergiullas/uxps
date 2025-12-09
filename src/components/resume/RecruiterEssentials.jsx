import * as React from 'react';
import { Box, Card, CardContent, Chip, Stack, Tooltip, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

export default function RecruiterEssentials({ essentials }) {
  if (!essentials) return null;

  const { location, focus, availability, collaboration, links = [] } = essentials;

  const items = [
    { label: 'Location', value: location },
    { label: 'Focus', value: focus },
    { label: 'Availability', value: availability },
    { label: 'Collaboration', value: collaboration },
  ].filter((item) => Boolean(item.value));

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }} className="resume-print-card">
      <CardContent>
        <Stack spacing={2}>
          <Typography component="h2" variant="h4" color="text.primary">
            Recruiter essentials
          </Typography>

          <Stack
            spacing={1.5}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fit, minmax(220px, 1fr))' },
              gap: 1.5,
            }}
          >
            {items.map((item) => (
              <Box key={item.label} sx={{ display: 'grid', gap: 0.5 }}>
                <Typography variant="overline" color="text.secondary">
                  {item.label}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Stack>

          {links?.length ? (
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {links.map((link) => (
                <Tooltip key={link.url} title={link.url} disableInteractive>
                  <Chip
                    component="a"
                    href={link.url}
                    clickable
                    icon={<LaunchIcon fontSize="small" />}
                    label={link.label}
                    variant="outlined"
                    sx={{ borderRadius: 1.5 }}
                  />
                </Tooltip>
              ))}
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
