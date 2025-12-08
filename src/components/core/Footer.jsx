import React from 'react';
import { Box, Link as MuiLink, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';

import { footerNav } from '../../content/navigation.js';
import { siteMeta } from '../../content/siteMeta.js';

export default function Footer() {
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

        <Stack
          component="nav"
          direction="row"
          spacing={2}
          aria-label="Footer navigation"
          sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {footerNav.map((item) => (
            <MuiLink
              key={item.href}
              href={item.href}
              underline="hover"
              color="text.secondary"
              sx={(t) => ({
                px: t.spacing(1),
                py: t.spacing(0.5),
                borderRadius: t.shape.borderRadius,
                '&:focus-visible': {
                  outline: `2px solid ${t.palette.text.primary}`,
                  outlineOffset: t.spacing(0.5),
                },
              })}
            >
              {item.label}
            </MuiLink>
          ))}
        </Stack>

        <Typography variant="caption" color="text.secondary">
          {siteMeta.footer.copyright}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {siteMeta.footer.attribution}
        </Typography>
      </Stack>
    </Box>
  );
}
