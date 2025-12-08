import * as React from 'react';
import { Box } from '@mui/material';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';
import { useSectionObserverContext } from './SectionObserverProvider.jsx';

export default function RevealOnScroll({ children, sectionId, delay = 0 }) {
  const { entries, isObserverSupported } = useSectionObserverContext();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [revealed, setRevealed] = React.useState(
    prefersReducedMotion || !isObserverSupported,
  );

  React.useEffect(() => {
    if (prefersReducedMotion || !isObserverSupported) {
      setRevealed(true);
      return;
    }

    const entry = entries?.[sectionId];
    if (entry?.isIntersecting) {
      setRevealed(true);
    }
  }, [prefersReducedMotion, isObserverSupported, entries, sectionId]);

  return (
    <Box
      sx={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(8px)',
        transition: prefersReducedMotion
          ? 'none'
          : 'opacity 200ms ease-out, transform 200ms ease-out',
        transitionDelay: revealed ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </Box>
  );
}
