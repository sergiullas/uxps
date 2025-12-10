import * as React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { WORK_ITEMS, workContent } from '../content/work.js';
import { siteMeta } from '../content/siteMeta.js';
import WorkItemCard from '../components/work/WorkItemCard.jsx';
import { FadeIn, MotionErrorBoundary, SlideUpOnScroll, StaggerList } from '../lib/motion/index.js';

export default function Work() {
  const offsetPattern = ['none', 'small', 'none', 'medium'];
  const offsetStyles = {
    none: { mt: 0 },
    small: { mt: { md: 3, lg: 4 } },
    medium: { mt: { md: 5, lg: 6 } },
  };

  return (
    <>
      <Helmet>
        <title>{`${workContent.heading} | ${siteMeta.title}`}</title>
        <meta name="description" content={workContent.description} />
        <link rel="canonical" href={`${siteMeta.url}/work`} />
      </Helmet>

      <MotionErrorBoundary>
        <Container maxWidth="lg" component="main" sx={{ py: { xs: 6, md: 8 } }}>
          <Stack spacing={{ xs: 3, md: 4 }}>
            <SlideUpOnScroll as="header">
              <Stack spacing={1.5}>
                <Typography component="h1" variant="h1" color="text.primary">
                  {workContent.heading}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: { md: '72ch' } }}>
                  {workContent.description}
                </Typography>
              </Stack>
            </SlideUpOnScroll>

            <Box
              sx={{
                display: 'grid',
                gap: { xs: 2, md: 3, lg: 4 },
                alignItems: 'start',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: '1fr',
                  md: 'repeat(2, minmax(280px, 1fr))',
                  lg: 'repeat(3, minmax(280px, 1fr))',
                },
              }}
            >
              <StaggerList
                as="div"
                style={{ display: 'contents' }}
                interval={0.06}
                triggerOnScroll
              >
                {WORK_ITEMS.map((item, index) => {
                  const offsetVariant = offsetPattern[index % offsetPattern.length];
                  const offsetSx = offsetStyles[offsetVariant];

                  return (
                    <FadeIn key={item.slug} as="div" style={{ display: 'contents' }}>
                      <WorkItemCard item={item} headingLevel="h2" offsetSx={offsetSx} />
                    </FadeIn>
                  );
                })}
              </StaggerList>
            </Box>
          </Stack>
        </Container>
      </MotionErrorBoundary>
    </>
  );
}
