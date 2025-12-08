import * as React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import EditorialHero from '../components/modules/EditorialHero.jsx';
import AppSection from '../components/ui/AppSection.jsx';
import AppButton from '../components/ui/AppButton.jsx';
import personal from '../content/personal.js';
import skills from '../content/skills.js';
import experience from '../content/experience.js';
import education from '../content/education.js';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sergio Antezana — UX Portfolio</title>
        <meta
          name="description"
          content="Systems-minded UX designer crafting editorial-quality case studies, tools, and workflows."
        />
        <link rel="canonical" href="https://uxps.vercel.app/" />
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
              Selected work
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: { md: '72ch' } }}>
              Case studies are being refreshed for the final handoff. In the meantime, here are the focus areas and
              outcomes guiding the next releases.
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
            {[
              {
                title: 'Design systems & governance',
                detail:
                  'Building editorial-quality tokens, documentation, and accessibility guardrails for fast-moving B2B teams.',
              },
              {
                title: 'Complex workflows',
                detail: 'Translating research and operations flows into actionable interfaces that reduce cognitive load.',
              },
              {
                title: 'Coaching & enablement',
                detail: 'Pairing with PMs and IC designers to ship on a predictable cadence with measurable outcomes.',
              },
            ].map((item) => (
              <Box
                component="li"
                key={item.title}
                sx={(t) => ({
                  border: `1px solid ${t.palette.divider}`,
                  borderRadius: t.shape.borderRadius,
                  backgroundColor: t.palette.background.paper,
                  p: { xs: t.spacing(2.5), md: t.spacing(3) },
                  boxShadow: t.customShadows?.card,
                })}
              >
                <Typography component="h3" variant="h4" color="text.primary" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.detail}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </AppSection>

      <AppSection id="about" aria-labelledby="about-heading" component="section">
        <Stack spacing={{ xs: 3, md: 4 }}>
          <Stack spacing={1.5}>
            <Typography id="about-heading" component="h2" variant="h2" color="text.primary">
              About
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: { md: '70ch' } }}>
              {personal.bio}
            </Typography>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 4 }}>
            <Box sx={{ minWidth: { md: '40%' } }}>
              <Typography component="h3" variant="h4" color="text.primary" sx={{ mb: 1 }}>
                Core skills
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
                Location & availability
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {personal.location} · Available for remote-friendly collaborations
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </AppSection>

      <AppSection id="resume" aria-labelledby="resume-heading" component="section">
        <Stack spacing={{ xs: 3, md: 4 }}>
          <Stack spacing={1.5}>
            <Typography id="resume-heading" component="h2" variant="h2" color="text.primary">
              Resume snapshots
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: { md: '72ch' } }}>
              Highlights from recent roles and education. A detailed PDF version is available on request.
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
                Education
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
            Contact
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Ready to collaborate or need a deeper case study? Let’s talk.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 2.5 }} alignItems="center">
            <AppButton component="a" href={`mailto:${personal.email}`} color="primary">
              Email {personal.name}
            </AppButton>
            <Typography variant="body2" color="text.secondary">
              Prefer async? {personal.email}
            </Typography>
          </Stack>
        </Stack>
      </AppSection>
    </>
  );
}
