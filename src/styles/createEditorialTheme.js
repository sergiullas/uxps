import { createTheme } from '@mui/material/styles';
import { editorialThemeTokens } from './themeTokens.js';

export function createEditorialTheme(mode = 'light') {
  const paletteTokens =
    mode === 'dark' ? editorialThemeTokens.palette.dark : editorialThemeTokens.palette.light;

  const theme = createTheme({
    palette: paletteTokens,
    typography: editorialThemeTokens.typography,
    shape: editorialThemeTokens.shape,
    spacing: editorialThemeTokens.spacing,
    
    // New top-level property for custom shadows (Declarative approach)
    customShadows: {
      card: editorialThemeTokens.shadows.card,
    },

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
