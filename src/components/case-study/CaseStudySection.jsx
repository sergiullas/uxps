import * as React from 'react';
import { Box, Stack } from '@mui/material';
import CaseStudySectionHeader from './CaseStudySectionHeader.jsx';
import CaseStudyBody from './CaseStudyBody.jsx';
import CaseStudyFigure from './CaseStudyFigure.jsx';

export default function CaseStudySection({ section }) {
  if (!section) return null;
  const { id, eyebrow, title, kicker, body = [], media = [] } = section;

  return (
    <Box id={id}>
      <Stack spacing={2.5}>
        <CaseStudySectionHeader eyebrow={eyebrow} title={title} kicker={kicker} />
        <CaseStudyBody blocks={body} />
        {media.length ? (
          <Stack spacing={2.5}>
            {media.map((item) => (
              <CaseStudyFigure key={item.id || item.src} media={item} />
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Box>
  );
}
