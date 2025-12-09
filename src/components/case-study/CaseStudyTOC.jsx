import * as React from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import CaseStudyTOCIndicator from './CaseStudyTOCIndicator.jsx';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

export default function CaseStudyTOC({ sections = [], toc = {}, activeSectionId }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isTOCEnabled = Boolean(toc?.enabled);

  const availableIds = React.useMemo(() => sections.map((section) => section.id), [sections]);
  const sectionIds = React.useMemo(
    () => (toc.sectionIds?.length ? toc.sectionIds : availableIds),
    [toc.sectionIds, availableIds],
  );
  const filteredIds = React.useMemo(
    () => sectionIds.filter((id) => availableIds.includes(id)),
    [sectionIds, availableIds],
  );

  const sectionsById = React.useMemo(
    () =>
      sections.reduce((acc, section) => {
        acc[section.id] = section;
        return acc;
      }, {}),
    [sections],
  );

  const itemRefs = React.useRef({});
  const [indicator, setIndicator] = React.useState({ top: 0, height: 0 });

  const setItemRef = React.useCallback((id) => (node) => {
    if (node) {
      itemRefs.current[id] = node;
    }
  }, []);

  React.useEffect(() => {
    if (!isTOCEnabled || typeof window === 'undefined') return undefined;

    const updateIndicator = () => {
      const node = activeSectionId ? itemRefs.current[activeSectionId] : null;
      if (node) {
        setIndicator({ top: node.offsetTop, height: node.offsetHeight });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);

    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSectionId, filteredIds, isTOCEnabled]);

  if (!isTOCEnabled || !filteredIds.length) return null;

  return (
    <Box
      sx={(t) => ({
        border: `1px solid ${t.palette.divider}`,
        borderRadius: t.shape.borderRadius,
        p: { xs: t.spacing(2.5), md: t.spacing(3) },
        backgroundColor: t.palette.background.default,
      })}
    >
      <Stack spacing={1.5}>
        <Typography component="h2" variant="h5" color="text.primary">
          Table of contents
        </Typography>
        <Stack
          component="ul"
          spacing={0.5}
          sx={{
            listStyle: 'none',
            p: 0,
            m: 0,
            position: 'relative',
            pl: 1.5,
          }}
        >
          <CaseStudyTOCIndicator
            top={indicator.top}
            height={indicator.height}
            isVisible={Boolean(activeSectionId)}
          />
          {filteredIds.map((id) => {
            const isActive = id === activeSectionId;
            const title = sectionsById[id]?.title || id;

            return (
              <Box component="li" key={id} ref={setItemRef(id)}>
                <Link
                  href={`#${id}`}
                  underline="none"
                  color={isActive ? 'var(--context-primary)' : 'text.secondary'}
                  aria-current={isActive ? 'location' : undefined}
                  sx={(t) => ({
                    display: 'block',
                    px: 1,
                    py: 0.75,
                    fontWeight: isActive ? 700 : 600,
                    borderRadius: t.shape.borderRadius,
                    backgroundColor: isActive ? t.palette.action.hover : 'transparent',
                    '&:hover': {
                      color: 'var(--context-primary)',
                    },
                    transition: prefersReducedMotion
                      ? 'none'
                      : 'color 120ms ease, background-color 120ms ease',
                  })}
                >
                  {title}
                </Link>
              </Box>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
