import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createEditorialTheme } from '../../styles/createEditorialTheme.js';

export const ColorModeContext = React.createContext({
  mode: 'light',
  toggleColorMode: () => {},
});

const STORAGE_KEY = 'uxps-color-mode';

export default function AppThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = React.useState('light');

  React.useLayoutEffect(() => {
    let determinedMode = prefersDarkMode ? 'dark' : 'light';

    try {
      const storedMode = window.localStorage.getItem(STORAGE_KEY);
      if (storedMode === 'light' || storedMode === 'dark') {
        determinedMode = storedMode;
      }
    } catch (e) { /* localStorage may be unavailable; fail silently */ }
    
    setMode(determinedMode);
  }, [prefersDarkMode]);

  React.useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {
      // localStorage may be unavailable; fail silently
    }
  }, [mode]);

  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode],
  );

  const theme = React.useMemo(() => createEditorialTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
