import * as React from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import { AppBox as Box, AppIconButton as IconButton, AppTooltip as Tooltip, AppTypography as Typography } from '../ui';

import socialLinks from '../../content/socialLinks.js';
import SocialIconRenderer from './SocialIconRenderer.jsx';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

const warnDev = (message) => {
  if (import.meta?.env?.DEV) {
    console.warn(message);
  }
};

export default function SocialLinks({
  location,
  sx,
  showLabels = false,
}) {
  const theme = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();

  const { settings, platforms } = socialLinks;
  const validLocations = React.useMemo(
    () => new Set(Array.isArray(settings.locations) ? settings.locations : []),
    [settings.locations],
  );

  if (!location) {
    warnDev('[SocialLinks] Missing required prop: location');
  }
  const visible = React.useMemo(() => {
    const items = [];

    platforms.forEach((platform) => {
      if (!Array.isArray(platform.showIn)) {
        warnDev(`[SocialLinks] Platform "${platform.id}" is missing required showIn array.`);
        return;
      }

      const unknownTargets = platform.showIn.filter((loc) => !validLocations.has(loc));
      if (unknownTargets.length > 0) {
        warnDev(
          `[SocialLinks] Platform "${platform.id}" targets unknown locations: ${unknownTargets.join(', ')}.`,
        );
      }

      if (platform.showIn.includes(location) && platform.url) {
        items.push(platform);
      }
    });

    return items;
  }, [location, platforms, validLocations]);

  if (validLocations.size > 0 && !validLocations.has(location)) {
    warnDev(
      `[SocialLinks] Unknown location "${location}". Add it to socialLinks.settings.locations if valid.`,
    );
    return null;
  }

  if (!location) {
    return null;
  }

  if (visible.length === 0) return null;

  const iconSizeKey = settings.iconSize?.[location] || 'medium';
  const gap = settings.gap?.[location] ?? 2;

  const iconSize = {
    small: theme.spacing(2.5),
    medium: theme.spacing(3),
    large: theme.spacing(4),
  }[iconSizeKey] || theme.spacing(3);

  const printModeClass = settings.printMode === 'text' ? 'print-as-text' : '';

  return (
    <Box
      component="nav"
      aria-label="Social links"
      className={`social-links-nav ${printModeClass}`.trim()}
      sx={{
        display: 'flex',
        alignItems: showLabels ? 'stretch' : 'center',
        gap: theme.spacing(gap),
        flexWrap: 'wrap',
        ...sx,
      }}
    >
      {visible.map((platform) => (
        <SocialLinkItem
          key={platform.id}
          platform={platform}
          iconSize={iconSize}
          showLabel={showLabels}
          prefersReducedMotion={prefersReducedMotion}
          theme={theme}
        />
      ))}
    </Box>
  );
}

function SocialLinkItem({ platform, iconSize, showLabel, prefersReducedMotion, theme }) {
  const { label, icon, url, ariaLabel } = platform;

  const hoverTransform = prefersReducedMotion
    ? 'none'
    : `translateY(-${theme.spacing(0.125)})`;

  const transition = theme.transitions.create(
    ['transform', 'background-color', 'border-color'],
    { duration: theme.transitions.duration.shorter },
  );

  if (!showLabel) {
    return (
      <Tooltip title={label} arrow>
        <IconButton
          component="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          sx={{
            borderRadius: 999,
            border: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
            backgroundColor: alpha(theme.palette.background.paper, 0.7),
            transition,
            '&:hover': {
              transform: hoverTransform,
              backgroundColor: alpha(theme.palette.action.hover, 0.3),
              borderColor: alpha(theme.palette.text.secondary, 0.6),
            },
            '&:focus-visible': {
              outline: `2px solid ${theme.palette.text.primary}`,
              outlineOffset: theme.spacing(0.5),
            },
          }}
        >
          <SocialIconRenderer iconName={icon} sx={{ fontSize: iconSize }} />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Box
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        textDecoration: 'none',
        color: theme.palette.text.primary,
        py: theme.spacing(1),
        px: theme.spacing(1.5),
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
        backgroundColor: alpha(theme.palette.background.paper, 0.7),
        transition,
        '&:hover': {
          transform: hoverTransform,
          backgroundColor: alpha(theme.palette.action.hover, 0.3),
          borderColor: alpha(theme.palette.text.secondary, 0.6),
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.text.primary}`,
          outlineOffset: theme.spacing(0.5),
        },
      }}
    >
      <SocialIconRenderer
        iconName={icon}
        sx={{ fontSize: iconSize, color: theme.palette.primary.main }}
      />
      <Typography component="span" variant="body2" sx={{ fontWeight: 600 }}>
        {label}
      </Typography>
    </Box>
  );
}
