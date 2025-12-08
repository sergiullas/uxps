import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import { getCaseStudyBySlug } from '../../content/case-studies/index.js';
import SEOHead from '../SEOHead.jsx';
import CaseStudyLayout from './CaseStudyLayout.jsx';
import CaseStudyNotFound from './CaseStudyNotFound.jsx';

export default function CaseStudyRoute() {
  const { slug } = useParams();
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return (
      <>
        <SEOHead
          title="Case study not found"
          description="The case study you are looking for does not exist."
        />
        <CaseStudyNotFound />
      </>
    );
  }

  const { meta, hero } = caseStudy;

  return (
    <>
      <SEOHead
        title={meta?.title || hero?.title}
        description={meta?.description}
        ogImage={meta?.ogImage}
      />
      <Container maxWidth="lg" component="main" sx={{ py: { xs: 6, md: 8 } }}>
        <CaseStudyLayout caseStudy={caseStudy} />
      </Container>
    </>
  );
}
