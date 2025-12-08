import * as React from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';

export default function CaseStudyTOC({ sections = [], toc = {} }) {
  if (!toc?.enabled) return null;

  const availableIds = sections.map((section) => section.id);
  const sectionIds = toc.sectionIds?.length ? toc.sectionIds : availableIds;
  const filteredIds = sectionIds.filter((id) => availableIds.includes(id));

  if (!filteredIds.length) return null;

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
        <Stack component="ul" spacing={0.75} sx={{ listStyle: 'none', p: 0, m: 0 }}>
          {filteredIds.map((id) => (
            <Box component="li" key={id}>
              <Link href={`#${id}`} underline="hover" color="primary" sx={{ fontWeight: 600 }}>
                {sections.find((section) => section.id === id)?.title || id}
              </Link>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
