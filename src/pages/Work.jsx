import * as React from 'react';
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';

import { WORK_ITEMS, workContent } from '../content/work.js';
import { siteMeta } from '../content/siteMeta.js';

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
                <Link
                  component={RouterLink}
                  to={`/work/${item.slug}`}
                  underline="none"
                  sx={(t) => ({
                    display: 'block',
                    border: `1px solid ${t.palette.divider}`,
                    borderRadius: t.shape.borderRadius,
                    backgroundColor: t.palette.background.paper,
                    p: { xs: t.spacing(2.5), md: t.spacing(3) },
                    boxShadow: t.customShadows?.card,
                    transition: 'border-color 150ms ease, box-shadow 150ms ease',
                    '&:hover, &:focus-visible': {
                      borderColor: t.palette.primary.main,
                      boxShadow: t.customShadows?.primary,
                    },
                  })}
                  aria-label={`View case study: ${item.title}`}
                >
                  <Stack spacing={1.5}>
                    <Typography component="h2" variant="h4" color="text.primary">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.summary}
                    </Typography>
                    {item.tags?.length ? (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {item.tags.map((tag) => (
                          <Box
                            key={tag}
                            sx={{
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                              backgroundColor: (t) => t.palette.background.default,
                              color: 'text.secondary',
                              typography: 'caption',
                            }}
                          >
                            {tag}
                          </Box>
                        ))}
                      </Box>
                    ) : null}
                  </Stack>
                </Link>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </>
  );
}
