// Tokens for the Editorial theme.
// Exact values should match THEME_EDITORIAL_v2.md.
export const editorialThemeTokens = {
  palette: {
    light: {
      mode: 'light',
      primary: {
        light: '#3D9A84',
        main: '#2D7A6E', // Teal/green accent
        dark: '#1D5A4E',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: '#404040',
        main: '#1A1A1A', // Near-black for outlines
        dark: '#000000',
        contrastText: '#FFFFFF',
      },
      background: {
        default: '#F5F5F5', // Off-white (soft)
        paper: '#FFFFFF', // Pure white for cards
        elevated: '#FAFAFA', // Slightly darker for elevation
      },
      text: {
        primary: '#1A1A1A', // Near-black
        secondary: '#6B6B6B', // Medium gray
        disabled: '#9E9E9E', // Light gray
      },
      success: {
        main: '#2E7D32',
        light: '#4CAF50',
        dark: '#1B5E20',
      },
      error: {
        main: '#D32F2F',
        light: '#EF5350',
        dark: '#C62828',
      },
      warning: {
        main: '#ED6C02',
        light: '#FF9800',
        dark: '#E65100',
      },
      info: {
        main: '#0288D1',
        light: '#03A9F4',
        dark: '#01579B',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
    },
    dark: {
      mode: 'dark',
      primary: {
        main: '#3D9A84', // Slightly lighter teal for dark mode contrast
        light: '#4DAB94',
        dark: '#2D8A7A',
        contrastText: '#000000',
      },
      secondary: {
        light: '#E0E0E0',
        main: '#A0A0A0',
        dark: '#6B6B6B',
        contrastText: '#000000',
      },
      background: {
        default: '#121212', // Standard MUI dark background
        paper: '#1E1E1E',
        elevated: '#2C2C2C',
      },
      text: {
        primary: '#E0E0E0',
        secondary: '#A0A0A0',
        disabled: '#6B6B6B',
      },
      success: {
        main: '#4CAF50',
        light: '#81C784',
        dark: '#388E3C',
      },
      error: {
        main: '#EF5350',
        light: '#E57373',
        dark: '#D32F2F',
      },
      warning: {
        main: '#FF9800',
        light: '#FFB74D',
        dark: '#F57C00',
      },
      info: {
        main: '#03A9F4',
        light: '#4FC3F7',
        dark: '#0288D1',
      },
      divider: 'rgba(255, 255, 255, 0.12)',
    },
  },
  typography: {
    fontFamily: {
      heading: '"Fraunces", "Playfair Display", "Georgia", serif',
      body: '"Inter", "Helvetica Neue", "Arial", sans-serif',
    },
    // Display heading (Hero)
    h1: {
      fontFamily: '"Fraunces", "Playfair Display", "Georgia", serif',
      fontSize: 'clamp(2rem, 5vw, 3.5rem)', // 32px → 56px
      fontWeight: 400,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    // Section heading
    h2: {
      fontFamily: '"Fraunces", "Playfair Display", "Georgia", serif',
      fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', // 24px → 40px
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    // Subsection heading
    h3: {
      fontFamily: '"Fraunces", "Playfair Display", "Georgia", serif',
      fontSize: 'clamp(1.25rem, 2vw, 2rem)', // 20px → 32px
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.02em',
    },
    // Card title
    h4: {
      fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
      fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)', // 18px → 24px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    // Body text (primary)
    body1: {
      fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
      fontSize: 'clamp(1rem, 0.5vw, 1.125rem)', // 16px → 18px
      lineHeight: 1.6,
    },
    // Body text (secondary/smaller)
    body2: {
      fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
      fontSize: 'clamp(0.875rem, 0.5vw, 1rem)', // 14px → 16px
      lineHeight: 1.6,
    },
    // Navigation
    nav: {
      fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    // Buttons
    button: {
      fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
      fontSize: '0.9375rem', // 15px
      fontWeight: 500,
      letterSpacing: '0.02em',
      textTransform: 'none', // sentence case
    },
    // Caption / metadata
    caption: {
      fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
      fontSize: '0.875rem', // 14px
      lineHeight: 1.5,
    },
    // Overline / label
    overline: {
      fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
      fontSize: '0.75rem', // 12px
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 16, // editorial rounded cards
  },
  spacing: 8, // 8px base unit
  shadows: {
    card: '0 18px 45px rgba(15, 23, 42, 0.18)', // editorial card shadow
  },
  motion: {
    durations: {
      xshort: 0.12,
      short: 0.18,
      medium: 0.24,
      long: 0.32,
    },
    easing: {
      standard: [0.2, 0, 0, 1],
      emphasized: [0.32, 0, 0.67, 0],
    },
    spring: {
      subtle: { type: 'spring', stiffness: 170, damping: 26, mass: 1 },
      gentle: { type: 'spring', stiffness: 120, damping: 20, mass: 1 },
    },
  },
};
