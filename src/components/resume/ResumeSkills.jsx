import * as React from 'react';
import { Box, Chip, Typography } from '@mui/material';

export default function ResumeSkills({ skills }) {
  const clusters = skills?.clusters || [];

  return (
    <Box component="section" aria-labelledby="resume-skills-heading" id="skills">
      <Typography
        id="resume-skills-heading"
        component="h2"
        variant="h3"
        color="text.primary"
        sx={{ mb: 2 }}
      >
        Skills
      </Typography>

      <Box sx={{ display: 'grid', gap: 2.25 }}>
        {clusters.map((cluster) => (
          <Box key={cluster.id} sx={{ display: 'grid', gap: 1 }}>
            <Typography variant="h6" component="h3" color="text.primary">
              {cluster.label}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
              {cluster.skills.map((skill) => (
                <Chip
                  key={skill.name}
                  label={skill.name}
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: 1.5 }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
