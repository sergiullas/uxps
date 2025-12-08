import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';

function DetailItem({ label, value }) {
  if (!value) return null;
  return (
    <Box component="div">
      <Typography variant="overline" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body1" color="text.primary">
        {value}
      </Typography>
    </Box>
  );
}

export default function CaseStudyIntro({ intro = {} }) {
  const { role, company, timeframe, location, team, responsibilities = [], summary = [] } = intro;

  return (
    <Stack spacing={2.5}>
      <Stack
        component="dl"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
          gap: { xs: 2, sm: 2.5 },
          m: 0,
        }}
      >
        <DetailItem label="Role" value={role} />
        <DetailItem label="Company" value={company} />
        <DetailItem label="Timeframe" value={timeframe} />
        <DetailItem label="Location" value={location} />
        <DetailItem label="Team" value={team?.join(', ')} />
      </Stack>

      {responsibilities.length ? (
        <Box>
          <Typography variant="overline" color="text.secondary">
            Responsibilities
          </Typography>
          <Box component="ul" sx={{ m: 0, mt: 0.5, pl: 3 }}>
            {responsibilities.map((item) => (
              <Box component="li" key={item}>
                <Typography variant="body2" color="text.secondary">
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ) : null}

      {summary.length ? (
        <Stack spacing={1.5}>
          {summary.map((paragraph, index) => (
            <Typography key={paragraph + index} variant="body1" color="text.secondary">
              {paragraph}
            </Typography>
          ))}
        </Stack>
      ) : null}
    </Stack>
  );
}
