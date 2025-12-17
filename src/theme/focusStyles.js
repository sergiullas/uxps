import { alpha } from '@mui/material/styles';

export function getFocusRingStyles(theme, { inset = false } = {}) {
  const ringWidth = theme.custom?.focus?.ringWidth ?? 3;
  const ringOffset = theme.custom?.focus?.ringOffset ?? 2;
  const ringColor = theme.custom?.focus?.ringColor ?? theme.palette.primary.main;
  const outlineColor = theme.custom?.focus?.ringOuterColor ?? theme.palette.background.paper;

  return {
    position: 'relative',
    outline: `${ringWidth}px solid transparent`,
    outlineOffset: ringOffset,
    transition: `box-shadow ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeOut}, outline-color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeOut}`,
    '&:focus-visible': {
      outlineColor,
      boxShadow: `${inset ? 'inset ' : ''}0 0 0 ${ringWidth}px ${alpha(ringColor, 0.7)}`,
    },
  };
}
