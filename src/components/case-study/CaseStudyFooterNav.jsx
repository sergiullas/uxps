import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Stack, Typography } from '@mui/material';

export default function CaseStudyFooterNav({ currentSlug, workItems = [] }) {
  const hasMultiple = workItems.length > 1;
  const currentIndex = workItems.findIndex((item) => item.slug === currentSlug);

  if (!hasMultiple || currentIndex === -1) {
    return null;
  }

  const previous = currentIndex > 0 ? workItems[currentIndex - 1] : null;
  const next = currentIndex < workItems.length - 1 ? workItems[currentIndex + 1] : null;

  return (
    <Box
      component="nav"
      aria-label="Case study pagination"
      sx={(t) => ({
        borderTop: `1px solid ${t.palette.divider}`,
        pt: { xs: t.spacing(3), md: t.spacing(4) },
      })}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 2, md: 3 }}
        justifyContent="space-between"
      >
        {previous ? (
          <NavLink label="Previous" item={previous} />
        ) : (
          <Box sx={{ flex: 1 }} />
        )}

        {next ? <NavLink label="Next" item={next} align="right" /> : <Box sx={{ flex: 1 }} />}
      </Stack>
    </Box>
  );
}

function NavLink({ label, item, align = 'left' }) {
  if (!item) return null;

  return (
    <Stack spacing={0.5} sx={{ minWidth: 0, textAlign: { xs: 'left', md: align } }}>
      <Typography variant="overline" color="text.secondary">
        {label}
      </Typography>
      <Link
        component={RouterLink}
        to={`/work/${item.slug}`}
        underline="hover"
        color="primary"
        sx={{ fontWeight: 700, display: 'inline-flex' }}
      >
        {item.title}
      </Link>
      {item.summary ? (
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420 }}>
          {item.summary}
        </Typography>
      ) : null}
    </Stack>
  );
}
