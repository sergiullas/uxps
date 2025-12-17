import React from 'react';
import { alpha } from '@mui/material/styles';
import { AppBox as Box, AppStack as Stack, AppTypography as Typography } from '../ui';

import { siteMeta } from '../../content/siteMeta.js';
import SocialLinks from '../social/SocialLinks.jsx';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyright = siteMeta.siteName
    ? `© ${currentYear} ${siteMeta.siteName}`
    : `© ${currentYear}`;

  return (
    <Box
      component="footer"
      sx={(t) => ({
        borderTop: `1px solid ${t.palette.divider}`,
        marginTop: t.spacing(8),
        padding: t.spacing(3),
        textAlign: 'center',
        backgroundColor: alpha(t.palette.background.paper, 0.9),
      })}
    >
      <Stack spacing={1.5} alignItems="center">
        <Typography variant="body2" color="text.secondary">
          {siteMeta.footer.tagline}
        </Typography>

        <SocialLinks location="footer" sx={{ justifyContent: 'center' }} />

        <Typography variant="caption" color="text.secondary">
          {copyright}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {siteMeta.footer.attribution}
        </Typography>
      </Stack>
    </Box>
  );
}
