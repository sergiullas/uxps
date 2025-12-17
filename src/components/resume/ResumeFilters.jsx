import * as React from 'react';
import {
  AppBox as Box,
  AppToggleButton as ToggleButton,
  AppToggleButtonGroup as ToggleButtonGroup,
  AppTypography as Typography,
} from '../ui';

export default function ResumeFilters({ activeEra, onEraChange, totalCounts }) {
  const handleChange = (event, newValue) => {
    if (newValue !== null) onEraChange(newValue);
  };

  return (
    <Box sx={{ mb: 2, position: 'relative' }}>
      <ToggleButtonGroup
        value={activeEra}
        exclusive
        onChange={handleChange}
        aria-label="Filter experience by time period"
      >
        <ToggleButton value="all" aria-label="All roles">
          All ({totalCounts.all || 0})
        </ToggleButton>
        <ToggleButton value="recent" aria-label="Recent roles">
          Recent ({totalCounts.recent || 0})
        </ToggleButton>
        <ToggleButton value="mid" aria-label="Mid-career roles">
          Mid ({totalCounts.mid || 0})
        </ToggleButton>
        <ToggleButton value="early" aria-label="Early roles">
          Early ({totalCounts.early || 0})
        </ToggleButton>
      </ToggleButtonGroup>

      <Typography
        component="div"
        sx={{ position: 'absolute', left: -9999, top: 'auto' }}
        aria-live="polite"
      >
        Showing {totalCounts[activeEra] || 0} roles
      </Typography>
    </Box>
  );
}
