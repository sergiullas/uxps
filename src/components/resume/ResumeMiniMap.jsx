import * as React from 'react';
import {
  AppList as List,
  AppListItemButton as ListItemButton,
  AppListItemText as ListItemText,
  AppPaper as Paper,
  AppTypography as Typography,
} from '../ui';
import { resumeConfig, resumeSections } from '../../content/resume.js';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';

function getVisibleSections() {
  return resumeSections.filter((section) => {
    if (section.id === 'recruiter-essentials') {
      return resumeConfig?.recruiterEssentials?.show !== false;
    }

    if (section.id === 'certifications') {
      return Boolean(resumeConfig?.certifications?.show ?? true);
    }

    return true;
  });
}

export default function ResumeMiniMap() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = React.useState(resumeSections[0]?.id || 'summary');

  const visibleSections = React.useMemo(() => getVisibleSections(), []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) setActiveId(id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -55% 0px',
        threshold: 0.15,
      }
    );

    visibleSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) {
        if (import.meta.env.DEV) {
          console.warn(
            `ResumeMiniMap: Missing element for section "${section.id}". Add id="${section.id}" to the section container.`
          );
        }
        return;
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [visibleSections]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <Paper variant="outlined" sx={{ p: 1.25, borderRadius: 2 }} className="resume-mini-map">
      <Typography variant="subtitle2" color="text.secondary" sx={{ px: 1, pb: 0.5 }}>
        On this page
      </Typography>
      <List dense aria-label="Resume sections">
        {visibleSections.map((section) => {
          const selected = section.id === activeId;
          return (
            <ListItemButton
              key={section.id}
              selected={selected}
              onClick={() => handleScroll(section.id)}
              sx={{ borderRadius: 1.25, mb: 0.25 }}
            >
              <ListItemText primary={section.label} />
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );
}
