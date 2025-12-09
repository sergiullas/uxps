import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import { getCaseStudyBySlug } from '../../content/case-studies/index.js';
import SEOHead from '../SEOHead.jsx';
import CaseStudyLayout from './CaseStudyLayout.jsx';
import CaseStudyNotFound from './CaseStudyNotFound.jsx';
import { validateCaseStudy } from '../../utils/validateCaseStudy.js';
import { normalizeBrand } from '../../utils/normalizeBrand.js';
import ContextualBrandProvider from '../branding/ContextualBrandProvider.jsx';
import AccessGate from '../access-gate/AccessGate.jsx';
import useAccessGate from '../access-gate/useAccessGate.js';

export default function CaseStudyRoute() {
  const { slug } = useParams();
  const caseStudy = getCaseStudyBySlug(slug);
  const gateConfig = caseStudy?.accessGate;
  const gateHash = gateConfig?.passwordHash;
  const { unlocked, attempt } = useAccessGate(caseStudy?.slug, gateHash);

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
  const brand = normalizeBrand(caseStudy.brand);
  const isGateEnabled = Boolean(gateConfig?.enabled && gateHash);

  if (import.meta.env.DEV) {
    validateCaseStudy(caseStudy);
  }

  return (
    <>
      <SEOHead
        title={meta?.title || hero?.title}
        description={meta?.description}
        ogImage={meta?.ogImage}
      />
      <ContextualBrandProvider brand={brand}>
        <AccessGate
          enabled={isGateEnabled}
          unlocked={unlocked}
          onAttempt={attempt}
          title={gateConfig?.title}
          description={gateConfig?.description}
          hint={gateConfig?.hint}
        >
          <Container maxWidth="lg" component="main" sx={{ py: { xs: 6, md: 8 } }}>
            <CaseStudyLayout caseStudy={caseStudy} brand={brand} />
          </Container>
        </AccessGate>
      </ContextualBrandProvider>
    </>
  );
}
