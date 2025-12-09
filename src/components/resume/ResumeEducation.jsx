import * as React from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

export default function ResumeEducation({ education }) {
  const items = education?.items || [];

  return (
    <Box component="section" aria-labelledby="resume-education-heading" id="education">
      <Typography
        id="resume-education-heading"
        component="h2"
        variant="h3"
        color="text.primary"
        sx={{ mb: 2 }}
      >
        Education
      </Typography>

      <Stack spacing={2} component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {items.map((item) => (
          <Box
            key={item.id}
            component="li"
            sx={{ transition: (t) => t.transitions.create(['transform', 'box-shadow'], { duration: t.transitions.duration.shorter }) }}
          >
            <Card
              variant="outlined"
              className="resume-print-card"
              sx={{
                borderRadius: 2,
                '&:hover': {
                  boxShadow: (theme) => theme.shadows[3],
                },
              }}
            >
              <CardContent sx={{ display: 'grid', gap: 0.75 }}>
                <Typography component="h3" variant="h6" color="text.primary">
                  {item.school}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.degree}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.timeframeLabel} · {item.location}
                </Typography>
                {item.details?.length ? (
                  <Box component="ul" sx={{ pl: 2.75, m: 0, display: 'grid', gap: 0.5 }}>
                    {item.details.map((detail, index) => (
                      <Box key={index} component="li">
                        <Typography variant="body2" color="text.secondary">
                          {detail}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ) : null}
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
