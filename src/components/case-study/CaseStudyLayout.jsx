import * as React from 'react';
import { Box, Stack } from '@mui/material';
import CaseStudyHeaderMeta from './CaseStudyHeaderMeta.jsx';
import CaseStudyIntro from './CaseStudyIntro.jsx';
import CaseStudyOutcomes from './CaseStudyOutcomes.jsx';
import CaseStudyTOC from './CaseStudyTOC.jsx';
import CaseStudySection from './CaseStudySection.jsx';

export default function CaseStudyLayout({ caseStudy }) {
  const { hero, intro, outcomes, sections = [], toc } = caseStudy;

  return (
    <Stack spacing={{ xs: 4, md: 6 }}>
      <CaseStudyHeaderMeta hero={hero} />

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
    </Stack>
  );
}
