import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';
import { normalizeBrand } from '../../utils/normalizeBrand.js';

function parseHexColor(value) {
  if (!value || typeof value !== 'string') return null;
  const normalized = value.trim();
  const hex = normalized.startsWith('#') ? normalized.slice(1) : normalized;
  if (![3, 6].includes(hex.length)) return null;

  const expanded = hex.length === 3
    ? hex.split('').map((char) => char + char).join('')
    : hex;

  const int = Number.parseInt(expanded, 16);
  if (Number.isNaN(int)) return null;

  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

function relativeLuminance(color) {
  if (!color) return 0;
  const { r, g, b } = color;
  const transform = (channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };

  const [rLin, gLin, bLin] = [transform(r), transform(g), transform(b)];
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

function contrastRatio(foreground, background) {
  const fg = parseHexColor(foreground);
  const bg = parseHexColor(background);
  if (!fg || !bg) return 1;

  const fgLum = relativeLuminance(fg);
  const bgLum = relativeLuminance(bg);
  const lighter = Math.max(fgLum, bgLum);
  const darker = Math.min(fgLum, bgLum);

  return (lighter + 0.05) / (darker + 0.05);
}

function mixChannel(source, target, amount) {
  return Math.round(source + (target - source) * amount);
}

function mixColors(baseHex, targetHex, amount) {
  const base = parseHexColor(baseHex);
  const target = parseHexColor(targetHex);
  if (!base || !target) return baseHex;

  const r = mixChannel(base.r, target.r, amount);
  const g = mixChannel(base.g, target.g, amount);
  const b = mixChannel(base.b, target.b, amount);

  return `#${[r, g, b]
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('')}`;
}

function ensureAccessibleColor(color, background, minimumContrast = 4.5) {
  if (!color || !background) return color;
  const bgLum = relativeLuminance(parseHexColor(background));
  const shouldLighten = bgLum < 0.5;
  const target = shouldLighten ? '#ffffff' : '#000000';

  let candidate = color;
  let ratio = contrastRatio(candidate, background);
  let step = 0;

  while (ratio < minimumContrast && step < 10) {
    const amount = (step + 1) / 10;
    candidate = mixColors(color, target, amount);
    ratio = contrastRatio(candidate, background);
    step += 1;
  }

  return candidate;
}

export default function ContextualBrandProvider({ brand, children }) {
  const normalizedBrand = React.useMemo(() => normalizeBrand(brand), [brand]);
  const theme = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    const root = document.documentElement;
    if (!root) return undefined;

    const backgroundColor = theme.palette.mode === 'dark'
      ? theme.palette.background.default
      : theme.palette.background.paper;

    const basePrimary = normalizedBrand?.primaryColor || theme.palette.primary.main;
    const baseAccent = normalizedBrand?.accentColor || theme.palette.primary.main;

    const accessiblePrimary = ensureAccessibleColor(basePrimary, backgroundColor);
    const accessibleAccent = ensureAccessibleColor(baseAccent, backgroundColor);

    root.style.setProperty('--context-primary', accessiblePrimary);
    root.style.setProperty('--context-accent', accessibleAccent);
    root.style.setProperty('--context-transition', prefersReducedMotion ? '0ms' : '250ms ease-out');

    return () => {
      root.style.setProperty('--context-primary', theme.palette.primary.main);
      root.style.setProperty('--context-accent', theme.palette.primary.main);
      root.style.setProperty('--context-transition', '250ms ease-out');
    };
  }, [normalizedBrand, prefersReducedMotion, theme.palette.background.default, theme.palette.background.paper, theme.palette.mode, theme.palette.primary.main]);

  return children;
}
