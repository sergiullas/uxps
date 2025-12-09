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

import { ColorModeContext } from './AppThemeProvider';
import { mainNav } from '../../content/navigation.js';
import { siteMeta } from '../../content/siteMeta.js';

function useScrollElevation(enabled) {
  const [elevated, setElevated] = React.useState(false);

  React.useEffect(() => {
    if (!enabled) {
      setElevated(false);
      return undefined;
    }

    const handleScroll = () => {
      setElevated(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled]);

  return elevated;
}

function HeaderBrand() {
  return (
    <Typography
      component={RouterLink}
      to="/"
      variant="h4"
      sx={(t) => ({
        ...t.typography.h4,
        textDecoration: 'none',
        color: t.palette.text.primary,
        letterSpacing: t.typography.nav?.letterSpacing ?? t.typography.h4?.letterSpacing,
        '&:focus-visible': {
          outline: `2px solid ${t.palette.text.primary}`,
          outlineOffset: t.spacing(0.5),
          borderRadius: t.shape.borderRadius,
        },
      })}
    >
      {siteMeta.siteName || siteMeta.title}
    </Typography>
  );
}

function HeaderNav() {
  return (
    <Box
      component="nav"
      aria-label="Primary navigation"
      sx={(t) => ({
        display: 'flex',
        alignItems: 'center',
        gap: t.spacing(2.5),
        flexWrap: 'wrap',
        justifyContent: 'center',
      })}
    >
      {mainNav.map((item) => (
        <MuiLink
          key={item.href}
          href={item.href}
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
  );
}

function HeaderUtils() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isDarkMode = theme.palette.mode === 'dark';

  return (
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
          transition: t.transitions.create(['background-color', 'border-color', 'transform'], {
            duration: t.transitions.duration.shorter,
          }),
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
        {isDarkMode ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
      </IconButton>
    </Box>
  );
}

const HEADER_SLOT_COMPONENTS = {
  brand: HeaderBrand,
  nav: HeaderNav,
  utils: HeaderUtils,
};

function renderHeaderSlot(slotKey) {
  if (!slotKey) return null;
  const Component = HEADER_SLOT_COMPONENTS[slotKey];
  if (!Component) return null;
  return <Component />;
}

export default function Header() {
  const headerConfig = siteMeta.header || {};
  const defaultLayout = { left: 'nav', center: 'brand', right: 'utils' };
  const defaultBehavior = { sticky: true };

  const layout = { ...defaultLayout, ...(headerConfig.layout || {}) };
  const behavior = { ...defaultBehavior, ...(headerConfig.behavior || {}) };
  const isSticky = behavior.sticky ?? true;

  const elevated = useScrollElevation(isSticky);

  return (
    <Box component="header" sx={{ position: 'relative', zIndex: (t) => t.zIndex.appBar }}>
      <AppBar
        position={isSticky ? 'sticky' : 'static'}
        elevation={0}
        color="transparent"
        sx={(t) => ({
          backgroundColor: alpha(t.palette.background.default, 0.9),
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid transparent',
          transition: t.transitions.create(['box-shadow', 'border-color'], {
            duration: t.transitions.duration.shorter,
          }),
          boxShadow: isSticky && elevated ? t.shadows[4] : 'none',
          borderColor: isSticky && elevated ? t.palette.divider : 'transparent',
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
          },
        })}
      >
        <Toolbar
          sx={(t) => ({
            mx: 'auto',
            width: '100%',
            maxWidth: 1200,
            minHeight: { xs: 56, sm: 64 },
            px: {
              xs: t.spacing(2),
              sm: t.spacing(3),
              md: t.spacing(4),
            },
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            columnGap: { xs: t.spacing(1.5), md: t.spacing(3) },
          })}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', minWidth: 0 }}>
            {renderHeaderSlot(layout.left)}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 0 }}>
            {renderHeaderSlot(layout.center)}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', minWidth: 0 }}>
            {renderHeaderSlot(layout.right)}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
