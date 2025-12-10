import * as React from 'react';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import ResumeSummary from './ResumeSummary.jsx';
import ResumeSkills from './ResumeSkills.jsx';
import ResumeTimeline from './ResumeTimeline.jsx';
import ResumeEducation from './ResumeEducation.jsx';
import ResumeCertifications from './ResumeCertifications.jsx';
import ResumeFilters from './ResumeFilters.jsx';
import RecruiterEssentials from './RecruiterEssentials.jsx';
import ResumePronunciation from './ResumePronunciation.jsx';
import ResumeMiniMap from './ResumeMiniMap.jsx';
import { resumeConfig } from '../../content/resume.js';
import { siteMeta } from '../../content/siteMeta.js';
import { SlideUpOnScroll } from '../../lib/motion/index.js';

function ExperienceSection({ resumeData }) {
  const companies = React.useMemo(() => resumeData?.experience?.companies || [], [resumeData]);
  const roles = React.useMemo(
    () => companies.flatMap((company) => company.roles || []),
    [companies]
  );
  const [activeEra, setActiveEra] = React.useState('all');

  const totalCounts = React.useMemo(
    () => ({
      all: roles.length,
      recent: roles.filter((role) => role.era === 'recent').length,
      mid: roles.filter((role) => role.era === 'mid').length,
      early: roles.filter((role) => role.era === 'early').length,
    }),
    [roles]
  );

  return (
    <Box component="section" aria-labelledby="resume-experience-heading" id="experience">
      <Typography
        id="resume-experience-heading"
        component="h2"
        variant="h3"
        color="text.primary"
        sx={{ mb: 2 }}
      >
        Experience
      </Typography>

      <ResumeFilters activeEra={activeEra} onEraChange={setActiveEra} totalCounts={totalCounts} />
      <ResumeTimeline companies={companies} activeEraFilter={activeEra} />
    </Box>
  );
}

function RecruiterEssentialsSection({ essentials }) {
  const showRecruiterEssentials = resumeConfig?.recruiterEssentials?.show ?? true;
  if (!showRecruiterEssentials) return null;

  return (
    <Box component="section" id="recruiter-essentials" aria-labelledby="resume-recruiter-essentials-heading">
      <Typography
        id="resume-recruiter-essentials-heading"
        component="h2"
        variant="h3"
        color="text.primary"
        sx={{ mb: 2 }}
      >
        Recruiter essentials
      </Typography>

      <RecruiterEssentials essentials={essentials} />
    </Box>
  );
}

function ResumeHeader({ description }) {
  return (
    <Stack spacing={1.5}>
      <Stack direction="row" alignItems="center" spacing={1.5} flexWrap="wrap">
        <Typography component="h1" variant="h1" color="text.primary">
          {siteMeta.siteName || siteMeta.title}
        </Typography>
        <ResumePronunciation />
      </Stack>

      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: { md: '72ch' } }}>
        {description}
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2 }}
        color="text.primary"
        alignItems={{ sm: 'center' }}
      >
        <Typography variant="body2">{siteMeta.location}</Typography>
        <Typography variant="body2" aria-hidden="true">
          ·
        </Typography>
        <Typography variant="body2">
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
        </Typography>
        <Typography variant="body2" aria-hidden="true">
          ·
        </Typography>
        <Typography variant="body2">
          <a href={siteMeta.social.linkedin}>LinkedIn</a>
        </Typography>
      </Stack>

      <Box>
        <Button variant="outlined" onClick={() => window.print()} sx={{ mt: 1 }}>
          Print resume
        </Button>
      </Box>
    </Stack>
  );
}

export default function ResumeLayout({ resumeData }) {
  const metaDescription = resumeData.summary?.intro?.[0] || 'Resume overview';
  const showMiniMap = resumeConfig?.miniMap?.enabled ?? true;

  return (
    <Container maxWidth="lg" component="main" sx={{ py: { xs: 6, md: 8 } }}>
      <Box
        className="resume-print-scope"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(240px, 1fr) minmax(0, 3fr)' },
          gap: { xs: 3, md: 6 },
        }}
      >
        {showMiniMap ? (
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'sticky',
              alignSelf: 'flex-start',
              top: (theme) => theme.spacing(6),
            }}
          >
            <ResumeMiniMap />
          </Box>
        ) : null}

        <Stack spacing={{ xs: 3, md: 4 }}>
          <ResumeHeader description={metaDescription} />
          <Divider />
          <SlideUpOnScroll>
            <ResumeSummary summary={resumeData.summary} />
          </SlideUpOnScroll>
          <SlideUpOnScroll>
            <RecruiterEssentialsSection essentials={resumeData.recruiterEssentials} />
          </SlideUpOnScroll>
          <SlideUpOnScroll>
            <ExperienceSection resumeData={resumeData} />
          </SlideUpOnScroll>
          <SlideUpOnScroll>
            <ResumeSkills skills={resumeData.skills} />
          </SlideUpOnScroll>
          <SlideUpOnScroll>
            <ResumeEducation education={resumeData.education} />
          </SlideUpOnScroll>
          <SlideUpOnScroll>
            <ResumeCertifications certifications={resumeData.certifications} />
          </SlideUpOnScroll>
        </Stack>
      </Box>
    </Container>
  );
}
