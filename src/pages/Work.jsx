import * as React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { WORK_ITEMS, workContent } from '../content/work.js';
import { siteMeta } from '../content/siteMeta.js';
import WorkItemCard from '../components/work/WorkItemCard.jsx';

export default function Work() {
  return (
    <>
      <Helmet>
        <title>{`${workContent.heading} | ${siteMeta.title}`}</title>
        <meta name="description" content={siteMeta.description} />
        <link rel="canonical" href={`${siteMeta.url}/work`} />
      </Helmet>

      <Container maxWidth="lg" component="main" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack spacing={{ xs: 3, md: 4 }}>
          <Stack spacing={1.5}>
            <Typography component="h1" variant="h1" color="text.primary">
              {workContent.heading}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: { md: '72ch' } }}>
              {workContent.description}
            </Typography>
          </Stack>

          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
              display: 'grid',
              gap: { xs: 2, md: 3 },
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            }}
          >
            {WORK_ITEMS.map((item) => (
              <Box component="li" key={item.slug}>
                <WorkItemCard item={item} headingLevel="h2" />
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </>
  );
}
