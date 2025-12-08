import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Stack, Typography } from '@mui/material';

function getRelatedCaseStudies(currentCaseStudy, allCaseStudies = []) {
  if (!currentCaseStudy) return [];

  const { slug, hero } = currentCaseStudy;
  const currentTagsSet = new Set(hero?.tags || []);
  const otherCaseStudies = allCaseStudies.filter((cs) => cs.slug !== slug);

  if (!otherCaseStudies.length) return [];

  const withSharedTags = otherCaseStudies.filter((cs) => {
    const tags = cs.hero?.tags || [];
    return tags.some((tag) => currentTagsSet.has(tag));
  });

  if (withSharedTags.length) return withSharedTags.slice(0, 3);

  const currentIndex = allCaseStudies.findIndex((cs) => cs.slug === slug);
  const rotatedStudies = [
    ...allCaseStudies.slice(currentIndex + 1),
    ...allCaseStudies.slice(0, currentIndex),
  ];
  return rotatedStudies.slice(0, 2);
}

export default function CaseStudyRelated({ currentCaseStudy, allCaseStudies = [] }) {
  const related = React.useMemo(
    () => getRelatedCaseStudies(currentCaseStudy, allCaseStudies),
    [currentCaseStudy, allCaseStudies],
  );

  if (!related.length) return null;

  return (
    <Box sx={(t) => ({
      borderTop: `1px solid ${t.palette.divider}`,
      pt: { xs: t.spacing(4), md: t.spacing(5) },
      pb: { xs: t.spacing(2), md: t.spacing(3) },
    })}
    >
      <Stack spacing={2.5}>
        <Typography component="h2" variant="h4" color="text.primary">
          Related case studies
        </Typography>
        <Stack spacing={2}>
          {related.map((caseStudy) => (
            <Box key={caseStudy.slug} sx={{ minWidth: 0 }}>
              <Link
                component={RouterLink}
                to={`/work/${caseStudy.slug}`}
                underline="hover"
                color="primary"
                sx={{
                  fontWeight: 700,
                  display: 'inline-flex',
                  fontSize: (t) => t.typography.h6.fontSize,
                }}
              >
                {caseStudy.hero?.title}
              </Link>
              {caseStudy.meta?.description ? (
                <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 640 }}>
                  {caseStudy.meta.description}
                </Typography>
              ) : null}
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
