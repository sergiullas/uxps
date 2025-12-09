import * as React from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { getMotionComponent, useMotionConfig } from '../../lib/motion/index.js';

export default function WorkItemCard({ item, headingLevel = 'h3' }) {
  const theme = useTheme();
  const { prefersReducedMotion, motion } = useMotionConfig();
  const MotionLink = getMotionComponent(Link);
  const hoverShadow = theme.customShadows?.primary ?? theme.customShadows?.card ?? theme.shadows[4];
  const transition = { duration: motion?.durations?.short ?? 0.18 };

  const linkProps = {
    component: RouterLink,
    to: `/work/${item.slug}`,
    underline: 'none',
    sx: (t) => ({
      display: 'block',
      border: `1px solid ${t.palette.divider}`,
      borderRadius: t.shape.borderRadius,
      backgroundColor: t.palette.background.paper,
      p: { xs: t.spacing(2.5), md: t.spacing(3) },
      boxShadow: t.customShadows?.card,
      transition: 'border-color 150ms ease, box-shadow 150ms ease',
      '&:hover, &:focus-visible': {
        borderColor: t.palette.primary.main,
        boxShadow: t.customShadows?.primary,
      },
    }),
    'aria-label': `View case study: ${item.title}`,
  };

  const content = (
    <Stack spacing={1.5}>
      <Typography component={headingLevel} variant="h4" color="text.primary">
        {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.summary}
      </Typography>
      {item.tags?.length ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {item.tags.map((tag, index) => (
            <Box
              key={`${tag}-${index}`}
              sx={{
                px: 1,
                py: 0.5,
                borderRadius: 1,
                backgroundColor: (t) => t.palette.background.default,
                color: 'text.secondary',
                typography: 'caption',
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      ) : null}
    </Stack>
  );

  if (prefersReducedMotion) {
    return <Link {...linkProps}>{content}</Link>;
  }

  return (
    <MotionLink
      whileHover={{ y: -3, boxShadow: hoverShadow }}
      whileFocus={{ y: -3, boxShadow: hoverShadow }}
      transition={transition}
      {...linkProps}
    >
      {content}
    </MotionLink>
  );
}
