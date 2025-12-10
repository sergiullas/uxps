import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

const MotionContext = React.createContext({ prefersReducedMotion: false, motion: {} });

export function MotionProvider({ children }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const theme = useTheme();

  const value = React.useMemo(
    () => ({ prefersReducedMotion, motion: theme.motion || {} }),
    [prefersReducedMotion, theme.motion]
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotionConfig() {
  return React.useContext(MotionContext);
}

export default MotionContext;
