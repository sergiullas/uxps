import { createTheme } from '@mui/material/styles';
import { editorialThemeTokens } from './themeTokens.js';

export function createEditorialTheme(mode = 'light') {
  const paletteTokens =
    mode === 'dark' ? editorialThemeTokens.palette.dark : editorialThemeTokens.palette.light;

  const focusRingColor = mode === 'dark' ? paletteTokens.primary.light : paletteTokens.primary.main;

  const transitions = {
    duration: {
      shortest: editorialThemeTokens.motion.durations.xshort * 1000,
      shorter: editorialThemeTokens.motion.durations.short * 1000,
      short: editorialThemeTokens.motion.durations.medium * 1000,
      standard: editorialThemeTokens.motion.durations.long * 1000,
    },
    easing: {
      easeInOut: `cubic-bezier(${editorialThemeTokens.motion.easing.standard.join(',')})`,
      easeOut: `cubic-bezier(${editorialThemeTokens.motion.easing.standard.join(',')})`,
      easeIn: `cubic-bezier(${editorialThemeTokens.motion.easing.emphasized.join(',')})`,
      sharp: `cubic-bezier(${editorialThemeTokens.motion.easing.emphasized.join(',')})`,
    },
  };

  const theme = createTheme({
    palette: paletteTokens,
    typography: editorialThemeTokens.typography,
    shape: editorialThemeTokens.shape,
    spacing: editorialThemeTokens.spacing,
    transitions,

    custom: {
      focus: {
        ringWidth: 3,
        ringColor: focusRingColor,
        ringOuterColor: paletteTokens.background.paper,
        ringOffset: 3,
      },
      interaction: {
        hoverLift: 4,
        hoverShadow: '0 10px 30px rgba(0,0,0,0.12)',
      },
    },

    customShadows: {
      card: editorialThemeTokens.shadows.card,
    },

    motion: editorialThemeTokens.motion,

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: paletteTokens.background.default,
            color: paletteTokens.text.primary,
          },
          a: {
            color: 'inherit',
            textDecorationColor: paletteTokens.divider,
          },
          '@media (prefers-reduced-motion: reduce)': {
            '*': {
              animationDuration: '0.01ms !important',
              animationIterationCount: '1 !important',
              transitionDuration: '0.01ms !important',
              scrollBehavior: 'auto !important',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: editorialThemeTokens.shape.borderRadius / 2,
            textTransform: editorialThemeTokens.typography.button.textTransform,
            letterSpacing: editorialThemeTokens.typography.button.letterSpacing,
            fontWeight: editorialThemeTokens.typography.button.fontWeight,
            fontSize: editorialThemeTokens.typography.button.fontSize,
            paddingInline: '1.25rem',
            paddingBlock: '0.7rem',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: editorialThemeTokens.shape.borderRadius,
          },
        },
      },
    },
  });

  return theme;
}
