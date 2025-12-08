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

export default function CaseStudyLayout({ caseStudy }) {
  const { hero, intro, outcomes, sections = [], toc, slug } = caseStudy;

  return (
    <Stack spacing={{ xs: 4, md: 6 }}>
      <CaseStudyBreadcrumbs caseStudy={caseStudy} />
      <CaseStudyHeaderMeta hero={hero} />

      <CaseStudyTOCMobile sections={sections} toc={toc} />

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
        <CaseStudyTOC sections={sections} toc={toc} />
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
