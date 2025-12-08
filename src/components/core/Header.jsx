import * as React from 'react';
import { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import { ColorModeContext } from './AppThemeProvider.jsx';

const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box component="header" sx={{ position: 'relative', zIndex: (t) => t.zIndex.appBar }}>
      <Box
        component="a"
        href="#main-content"
        sx={(t) => ({
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, -200%)',
          padding: t.spacing(1, 2),
          borderRadius: t.shape.borderRadius,
          backgroundColor: t.palette.background.paper,
          color: t.palette.text.primary,
          textDecoration: 'none',
          boxShadow: t.shadows[2],
          fontWeight: t.typography.fontWeightMedium,
          transition: t.transitions.create(['transform', 'opacity'], {
            duration: t.transitions.duration.shorter,
          }),
          opacity: 0,
          '&:focus-visible': {
            transform: 'translate(-50%, 20%)',
            opacity: 1,
          },
        })}
      >
        Skip to main content
      </Box>

      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={(t) => ({
          borderBottom: `1px solid ${alpha(t.palette.divider, 0.6)}`,
          backgroundColor: alpha(t.palette.background.default, 0.9),
          backdropFilter: 'blur(12px)',
        })}
      >
        <Toolbar
          sx={(t) => ({
            minHeight: t.spacing(8),
            px: {
              xs: t.spacing(2),
              sm: t.spacing(3),
              md: t.spacing(4),
            },
            gap: t.spacing(2),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          })}
        >
          <Box
            sx={(t) => ({
              display: 'flex',
              alignItems: 'center',
              gap: t.spacing(1.5),
              minWidth: 0,
            })}
          >
            <Typography
              component={RouterLink}
              to="/"
              variant="h4"
              sx={(t) => ({
                ...t.typography.h4,
                textDecoration: 'none',
                color: t.palette.text.primary,
                letterSpacing:
                  t.typography.nav?.letterSpacing ?? t.typography.h4?.letterSpacing,
                '&:focus-visible': {
                  outline: `2px solid ${t.palette.text.primary}`,
                  outlineOffset: t.spacing(0.5),
                  borderRadius: t.shape.borderRadius,
                },
              })}
            >
              UX Portfolio Starter
            </Typography>
          </Box>

          <Box
            component="nav"
            aria-label="Primary navigation"
            sx={(t) => ({
              display: 'flex',
              alignItems: 'center',
              gap: t.spacing(2.5),
              flexGrow: 1,
              justifyContent: 'center',
            })}
          >
            {NAV_ITEMS.map((item) => (
              <MuiLink
                key={item.href}
                component={RouterLink}
                to={item.href}
                underline="none"
                sx={(t) => ({
                  ...t.typography.nav,
                  textTransform: t.typography.nav?.textTransform,
                  letterSpacing: t.typography.nav?.letterSpacing,
                  color: t.palette.text.secondary,
                  position: 'relative',
                  py: t.spacing(0.5),
                  px: t.spacing(0.5),
                  borderRadius: t.shape.borderRadius,
                  transition: t.transitions.create(['color', 'background-color'], {
                    duration: t.transitions.duration.shorter,
                  }),
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: t.spacing(0.5),
                    right: t.spacing(0.5),
                    bottom: 0,
                    height: 2,
                    borderRadius: 999,
                    transformOrigin: 'center',
                    transform: 'scaleX(0)',
                    backgroundColor: alpha(t.palette.text.primary, 0.8),
                    transition: t.transitions.create('transform', {
                      duration: t.transitions.duration.shorter,
                    }),
                  },
                  '&:hover': {
                    color: t.palette.text.primary,
                    backgroundColor: alpha(t.palette.action.hover, 0.2),
                    '&::after': {
                      transform: 'scaleX(1)',
                    },
                  },
                  '&:focus-visible': {
                    outline: `2px solid ${t.palette.text.primary}`,
                    outlineOffset: t.spacing(0.5),
                    backgroundColor: alpha(t.palette.action.focus, 0.3),
                  },
                })}
              >
                {item.label}
              </MuiLink>
            ))}
          </Box>

          <Box
            sx={(t) => ({
              display: 'flex',
              alignItems: 'center',
              gap: t.spacing(1.5),
            })}
          >
            <IconButton
              size="small"
              edge="end"
              onClick={colorMode.toggleColorMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              sx={(t) => ({
                borderRadius: 999,
                p: t.spacing(0.75),
                border: `1px solid ${alpha(t.palette.divider, 0.7)}`,
                backgroundColor: alpha(t.palette.background.paper, 0.7),
                transition: t.transitions.create(
                  ['background-color', 'border-color', 'transform'],
                  {
                    duration: t.transitions.duration.shorter,
                  },
                ),
                '&:hover': {
                  backgroundColor: alpha(t.palette.action.hover, 0.3),
                  borderColor: alpha(t.palette.text.secondary, 0.6),
                  transform: 'translateY(-1px)',
                },
                '&:focus-visible': {
                  outline: `2px solid ${t.palette.text.primary}`,
                  outlineOffset: t.spacing(0.5),
                },
              })}
            >
              {isDarkMode ? (
                <LightModeOutlinedIcon fontSize="small" />
              ) : (
                <DarkModeOutlinedIcon fontSize="small" />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
