import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBreadcrumbs as Breadcrumbs, AppLink as Link, AppTypography as Typography } from '../ui';

export default function CaseStudyBreadcrumbs({ caseStudy }) {
  const title = caseStudy?.hero?.title;

  return (
    <Breadcrumbs
      aria-label="Breadcrumb"
      separator="→"
      sx={(t) => ({
        color: t.palette.text.secondary,
        fontSize: t.typography.body2.fontSize,
      })}
    >
      <Link component={RouterLink} underline="hover" color="inherit" to="/">
        Home
      </Link>
      <Link component={RouterLink} underline="hover" color="inherit" to="/work">
        Work
      </Link>
      <Typography color="text.primary" variant="body2">
        {title}
      </Typography>
    </Breadcrumbs>
  );
}
