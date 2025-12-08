import { spotifyCaseStudy } from './case-studies/spotify.js';

export const workContent = {
  heading: 'Selected work',
  description:
    'Case studies are being refreshed for the final handoff. In the meantime, here are the focus areas and outcomes guiding the next releases.',
};

export const workItems = [
  {
    id: spotifyCaseStudy.id,
    slug: spotifyCaseStudy.slug,
    title: spotifyCaseStudy.hero.title,
    summary: spotifyCaseStudy.meta.description,
    tags: spotifyCaseStudy.hero.tags,
    thumbnail: spotifyCaseStudy.hero.image?.src,
  },
];
