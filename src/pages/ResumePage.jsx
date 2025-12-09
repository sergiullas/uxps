import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import ResumeLayout from '../components/resume/ResumeLayout.jsx';
import { RESUME } from '../content/resume.js';
import { siteMeta } from '../content/siteMeta.js';
import '../styles/print-resume.css';

export default function ResumePage() {
  const metaDescription = RESUME.summary?.intro?.[0] || 'Resume overview';

  return (
    <>
      <Helmet>
        <title>{`Resume | ${siteMeta.title}`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`${siteMeta.url}/resume`} />
      </Helmet>

      <ResumeLayout resumeData={RESUME} />
    </>
  );
}
