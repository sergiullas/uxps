import * as React from 'react';
import { Box, Divider, Link, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';

import EditorialHero from '../components/modules/EditorialHero.jsx';
import AppSection from '../components/ui/AppSection.jsx';
import AppButton from '../components/ui/AppButton.jsx';
import { siteMeta } from '../content/siteMeta.js';
import { workContent, workItems } from '../content/work.js';
import { resumeContent, experience, education, skills } from '../content/resume.js';
import { contactContent } from '../content/contact.js';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
        <link rel="canonical" href={siteMeta.url} />
      </Helmet>

      <EditorialHero />

      <AppSection
        id="work"
        aria-labelledby="work-heading"
        component="section"
        sx={{ pt: { xs: 3, sm: 4 }, pb: { xs: 6, sm: 8 } }}
      >
        <Stack spacing={{ xs: 3, md: 4 }}>
          <Stack spacing={1.5}>
            <Typography id="work-heading" component="h2" variant="h2" color="text.primary">
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
            {workItems.map((item) => (
              <Box component="li" key={item.id}>
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
                    <Typography component="h3" variant="h4" color="text.primary">
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
      </AppSection>

      <AppSection id="about" aria-labelledby="about-heading" component="section">
        <Stack spacing={{ xs: 3, md: 4 }}>
          <Stack spacing={1.5}>
            <Typography id="about-heading" component="h2" variant="h2" color="text.primary">
              {siteMeta.aboutSection.heading}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: { md: '70ch' } }}>
              {siteMeta.bio}
            </Typography>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 4 }}>
            <Box sx={{ minWidth: { md: '40%' } }}>
              <Typography component="h3" variant="h4" color="text.primary" sx={{ mb: 1 }}>
                {siteMeta.aboutSection.skillsHeading}
              </Typography>
              <Stack component="ul" spacing={1.5} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {skills.map((skill) => (
                  <Box component="li" key={skill.id}>
                    <Typography variant="body1" color="text.primary" sx={{ fontWeight: 600 }}>
                      {skill.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.items.join(', ')}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />

            <Box sx={{ flex: 1 }}>
              <Typography component="h3" variant="h4" color="text.primary" sx={{ mb: 1 }}>
                {siteMeta.aboutSection.locationHeading}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {siteMeta.location} · {siteMeta.aboutSection.availabilityNote}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </AppSection>

      <AppSection id="resume" aria-labelledby="resume-heading" component="section">
        <Stack spacing={{ xs: 3, md: 4 }}>
          <Stack spacing={1.5}>
            <Typography id="resume-heading" component="h2" variant="h2" color="text.primary">
              {resumeContent.heading}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: { md: '72ch' } }}>
              {resumeContent.description}
            </Typography>
          </Stack>

          <Stack spacing={{ xs: 2.5, md: 3 }}>
            {experience.map((role) => (
              <Box
                key={role.id}
                sx={(t) => ({
                  border: `1px solid ${t.palette.divider}`,
                  borderRadius: t.shape.borderRadius,
                  p: { xs: t.spacing(2.5), md: t.spacing(3) },
                  backgroundColor: t.palette.background.paper,
                })}
              >
                <Stack spacing={0.5}>
                  <Typography component="h3" variant="h4" color="text.primary">
                    {role.role} · {role.company}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {role.start} – {role.end} · {role.location}
                  </Typography>
                  <Box component="ul" sx={{ m: 0, mt: 1, pl: 3 }}>
                    {role.highlights.map((highlight) => (
                      <Box component="li" key={highlight}>
                        <Typography variant="body2" color="text.secondary">
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Stack>
              </Box>
            ))}

            <Box sx={{ mt: 1 }}>
              <Typography component="h3" variant="h4" color="text.primary" sx={{ mb: 1 }}>
                {resumeContent.educationHeading}
              </Typography>
              <Stack component="ul" spacing={1.5} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {education.map((item) => (
                  <Box key={item.id} component="li">
                    <Typography variant="body1" color="text.primary" sx={{ fontWeight: 600 }}>
                      {item.degree}, {item.school}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.start} – {item.end} · {item.location}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </AppSection>

      <AppSection
        id="contact"
        aria-labelledby="contact-heading"
        component="section"
        sx={{ pb: { xs: 8, md: 10 } }}
      >
        <Stack spacing={{ xs: 2, md: 3 }} alignItems="flex-start">
          <Typography id="contact-heading" component="h2" variant="h2" color="text.primary">
            {contactContent.heading}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {contactContent.body}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 2.5 }} alignItems="center">
            <AppButton component="a" href={contactContent.primaryAction.href} color="primary">
              {contactContent.primaryAction.label}
            </AppButton>
            <Typography variant="body2" color="text.secondary">
              {contactContent.secondaryNote}
            </Typography>
          </Stack>
        </Stack>
      </AppSection>
    </>
  );
}
