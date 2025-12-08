import * as React from 'react';
import { Box, Stack, Typography, Link as MuiLink } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import AppSection from '../ui/AppSection.jsx';
import AppButton from '../ui/AppButton.jsx';

export default function EditorialHero() {
  const theme = useTheme();

  return (
    <AppSection
      id="hero"
      aria-labelledby="hero-heading"
      sx={{
        pt: { xs: theme.spacing(6), sm: theme.spacing(8), md: theme.spacing(10) },
        pb: { xs: theme.spacing(7), sm: theme.spacing(9), md: theme.spacing(12) },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 5, md: 6 }}
        sx={{
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
        }}
      >
        <Stack
          spacing={{ xs: 3, md: 3.5 }}
          sx={{ maxWidth: { xs: '100%', md: theme.spacing(90) } }}
        >
          <Typography
            id="hero-heading"
            component="h1"
            variant="h1"
            color="text.primary"
          >
            Designing systems that help complex organizations move faster.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: { xs: '100%', md: theme.spacing(80) },
            }}
          >
            I partner with teams to translate ambiguity into clear product direction, build resilient
            design systems, and deliver experiences that balance craft with measurable outcomes.
          </Typography>

          <Stack spacing={{ xs: 2.5, sm: 3 }}>
            <Typography
              variant="body2"
              sx={{
                color: alpha(theme.palette.text.secondary, 0.9),
                textTransform: 'uppercase',
                letterSpacing: theme.typography.overline?.letterSpacing,
              }}
            >
              Currently based in Seattle · Open to remote-friendly collaborations
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 2.5 }}
              sx={{ alignItems: { xs: 'stretch', sm: 'center' } }}
            >
              <AppButton component={RouterLink} to="/#work" color="primary">
                View selected work
              </AppButton>

              <MuiLink
                component={RouterLink}
                to="/resume"
                underline="none"
                sx={{
                  textTransform: theme.typography.nav?.textTransform,
                  letterSpacing: theme.typography.nav?.letterSpacing,
                  color: theme.palette.text.secondary,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: theme.spacing(0.75),
                  px: theme.spacing(0.5),
                  py: theme.spacing(0.5),
                  borderRadius: theme.shape.borderRadius,
                  transition: theme.transitions.create(['color', 'background-color'], {
                    duration: theme.transitions.duration.shorter,
                  }),
                  '&:hover': {
                    color: theme.palette.text.primary,
                    backgroundColor: alpha(theme.palette.action.hover, 0.2),
                  },
                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.text.primary}`,
                    outlineOffset: theme.spacing(0.5),
                    backgroundColor: alpha(theme.palette.action.focus, 0.3),
                  },
                }}
              >
                View resume
              </MuiLink>
            </Stack>
          </Stack>
        </Stack>

        <Box
          id="work"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2),
            minWidth: { xs: '100%', md: theme.spacing(35) },
            maxWidth: { xs: '100%', md: theme.spacing(40) },
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
            boxShadow: theme.customShadows?.card,
            p: { xs: theme.spacing(2.5), sm: theme.spacing(3) },
          }}
        >
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              fontWeight: 600,
            }}
          >
            Recent focus
          </Typography>
          <Box
            component="ul"
            sx={{
              m: 0,
              p: 0,
              listStyle: 'none',
              typography: 'body2',
              color: 'text.secondary',
              lineHeight: 1.7,
            }}
          >
            <Box component="li">* Launching editorial system updates for emerging B2B products</Box>
            <Box component="li">* Prototyping cross-platform workflows for research teams</Box>
            <Box component="li">* Coaching ICs on design systems thinking</Box>
          </Box>

          <MuiLink
            component={RouterLink}
            to="/#contact"
            aria-label="Jump to contact section"
            underline="none"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: theme.spacing(1),
              alignSelf: 'flex-start',
              padding: theme.spacing(1),
              borderRadius: 999,
              border: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
              backgroundColor: alpha(theme.palette.background.paper, 0.7),
              color: theme.palette.text.primary,
              transition: theme.transitions.create(['background-color', 'border-color', 'transform'], {
                duration: theme.transitions.duration.shorter,
              }),
              '&:hover': {
                backgroundColor: alpha(theme.palette.action.hover, 0.3),
                borderColor: alpha(theme.palette.text.secondary, 0.8),
                transform: 'translateY(-1px)',
              },
              '&:focus-visible': {
                outline: `2px solid ${theme.palette.text.primary}`,
                outlineOffset: theme.spacing(0.5),
              },
            }}
          >
            <MailOutlineIcon fontSize="small" />
            <Typography
              component="span"
              variant="body2"
              color="text.primary"
              sx={{ fontWeight: 600 }}
            >
              Contact
            </Typography>
          </MuiLink>
        </Box>
      </Stack>
    </AppSection>
  );
}
