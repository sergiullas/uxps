import * as React from 'react';
import { Box, Stack } from '@mui/material';
import CaseStudyBreadcrumbs from './CaseStudyBreadcrumbs.jsx';
import CaseStudyFooterNav from './CaseStudyFooterNav.jsx';
import CaseStudyHeaderMeta from './CaseStudyHeaderMeta.jsx';
import CaseStudyIntro from './CaseStudyIntro.jsx';
import CaseStudyOutcomes from './CaseStudyOutcomes.jsx';
import CaseStudyRelated from './CaseStudyRelated.jsx';
import CaseStudySection from './CaseStudySection.jsx';
import CaseStudyTOC from './CaseStudyTOC.jsx';
import CaseStudyTOCMobile from './CaseStudyTOCMobile.jsx';
import { workItems } from '../../content/work.js';
import { CASE_STUDIES } from '../../content/case-studies/index.js';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';
import { SectionObserverProvider, useSectionObserverContext } from './SectionObserverProvider.jsx';

const HEADER_CONDENSE_SCROLL_THRESHOLD = 104;

export default function CaseStudyLayout({ caseStudy }) {
  const sections = caseStudy.sections || [];

  return (
    <SectionObserverProvider sections={sections}>
      <CaseStudyLayoutContent caseStudy={caseStudy} />
    </SectionObserverProvider>
  );
}

function CaseStudyLayoutContent({ caseStudy }) {
  const { hero, intro, outcomes, sections = [], toc, slug } = caseStudy;
  const { activeSectionId } = useSectionObserverContext();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isHeaderCondensed, setIsHeaderCondensed] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    let frame = null;

    const updateState = () => {
      frame = null;
      setIsHeaderCondensed(window.scrollY > HEADER_CONDENSE_SCROLL_THRESHOLD);
    };

    const handleScroll = () => {
      if (prefersReducedMotion) {
        setIsHeaderCondensed(window.scrollY > HEADER_CONDENSE_SCROLL_THRESHOLD);
        return;
      }

      if (frame === null) {
        frame = window.requestAnimationFrame(updateState);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  return (
    <Stack spacing={{ xs: 4, md: 6 }}>
      <CaseStudyBreadcrumbs caseStudy={caseStudy} />
      <CaseStudyHeaderMeta hero={hero} compact={isHeaderCondensed} />

      <CaseStudyTOCMobile sections={sections} toc={toc} activeSectionId={activeSectionId} />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '2fr 1.5fr' },
          gap: { xs: 3, md: 4 },
        }}
      >
        <CaseStudyIntro intro={intro} />
        <CaseStudyOutcomes outcomes={outcomes} />
      </Box>

      {toc?.enabled && sections.length > 0 ? (
        <CaseStudyTOC sections={sections} toc={toc} activeSectionId={activeSectionId} />
      ) : null}

      <Stack component="article" spacing={{ xs: 4, md: 6 }}>
        {sections.map((section) => (
          <CaseStudySection key={section.id} section={section} />
        ))}
      </Stack>

      <CaseStudyRelated currentCaseStudy={caseStudy} allCaseStudies={CASE_STUDIES} />

      <CaseStudyFooterNav currentSlug={slug} workItems={workItems} />
    </Stack>
  );
}
