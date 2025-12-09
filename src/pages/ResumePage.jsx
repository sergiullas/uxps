import * as React from 'react';
import { Box, Chip, Container, Divider, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { resumeContent, experience, education, skills } from '../content/resume.js';
import { siteMeta } from '../content/siteMeta.js';
import '../styles/print-resume.css';

export default function ResumePage() {
  return (
    <>
      <Helmet>
        <title>{`Resume | ${siteMeta.title}`}</title>
        <meta name="description" content={resumeContent.description} />
        <link rel="canonical" href={`${siteMeta.url}/resume`} />
      </Helmet>

      <Container maxWidth="md" component="main" sx={{ py: { xs: 6, md: 8 } }}>
        <Box className="resume-print-scope">
          <Stack spacing={{ xs: 3, md: 4 }}>
            <HeaderBlock />
            <Divider />
            <ExperienceBlock />
            <EducationBlock />
            <SkillsBlock />
          </Stack>
        </Box>
      </Container>
    </>
  );
}

function HeaderBlock() {
  return (
    <Stack spacing={1.5}>
      <Typography component="h1" variant="h1" color="text.primary">
        {siteMeta.siteName || siteMeta.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: { md: '72ch' } }}>
        {resumeContent.description}
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2 }} color="text.primary">
        <Typography variant="body2">{siteMeta.location}</Typography>
        <Typography variant="body2">·</Typography>
        <Typography variant="body2">
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
        </Typography>
        <Typography variant="body2">·</Typography>
        <Typography variant="body2">
          <a href={siteMeta.social.linkedin}>LinkedIn</a>
        </Typography>
      </Stack>
    </Stack>
  );
}

function ExperienceBlock() {
  return (
    <Stack spacing={2.5} component="section" aria-labelledby="resume-experience-heading">
      <Typography id="resume-experience-heading" component="h2" variant="h3" color="text.primary">
        Experience
      </Typography>

      <Stack spacing={1.75}>
        {experience.map((role) => (
          <Box
            key={role.id}
            className="resume-print-card"
            sx={(t) => ({
              border: `1px solid ${t.palette.divider}`,
              borderRadius: t.shape.borderRadius,
              p: { xs: t.spacing(2.25), md: t.spacing(2.75) },
              backgroundColor: t.palette.background.paper,
              boxShadow: t.customShadows?.card,
            })}
          >
            <Stack spacing={0.75}>
              <Typography component="h3" variant="h5" color="text.primary">
                {role.role} · {role.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {role.start} – {role.end} · {role.location}
              </Typography>
              {role.highlights?.length ? (
                <Box component="ul" sx={{ m: 0, mt: 1, pl: 3 }}>
                  {role.highlights.map((item) => (
                    <Box component="li" key={item}>
                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ) : null}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

function EducationBlock() {
  return (
    <Stack spacing={1.5} component="section" aria-labelledby="resume-education-heading">
      <Typography id="resume-education-heading" component="h2" variant="h3" color="text.primary">
        {resumeContent.educationHeading}
      </Typography>
      <Stack spacing={1} component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {education.map((item) => (
          <Box key={item.id} component="li">
            <Typography component="h3" variant="h5" color="text.primary">
              {item.degree}, {item.school}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.start} – {item.end} · {item.location}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

function SkillsBlock() {
  return (
    <Stack spacing={1.5} component="section" aria-labelledby="resume-skills-heading">
      <Typography id="resume-skills-heading" component="h2" variant="h3" color="text.primary">
        Skills
      </Typography>
      <Stack spacing={1.25}>
        {skills.map((skill) => (
          <Box key={skill.id}>
            <Typography variant="body1" color="text.primary" sx={{ fontWeight: 600 }}>
              {skill.label}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 0.75 }}>
              {skill.items.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: 1.5 }}
                />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
