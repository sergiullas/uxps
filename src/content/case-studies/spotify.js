export const spotifyCaseStudy = {
  id: 'spotify-redesign',
  slug: 'spotify-redesign',
  meta: {
    title: 'Spotify Mobile Experience Redesign',
    description:
      'Redesigned the Spotify mobile experience to reduce friction in discovery and improve library navigation.',
    ogImage: '/images/projects/spotify-thumb.svg',
  },
  hero: {
    eyebrow: 'Case Study',
    title: 'Spotify Mobile Experience Redesign',
    subtitle:
      'Redesigned the Spotify mobile experience to reduce friction in discovery and improve library navigation.',
    tags: ['Mobile', 'Consumer', 'Interaction Design'],
    image: {
      src: '/images/projects/spotify-thumb.svg',
      alt: 'Preview of the Spotify mobile redesign concept.',
    },
  },
  intro: {
    role: 'Lead UX Designer',
    company: 'Personal Concept',
    timeframe: '2023',
    location: 'Remote',
    team: ['Self-directed concept'],
    responsibilities: ['Research synthesis', 'User flows', 'Interaction design', 'Prototyping in Figma'],
    summary: [
      'Users reported difficulty discovering new content without losing track of their existing library, especially in low-attention contexts.',
      'This concept project focused on refining library and discovery flows on mobile to give listeners more clarity and control.',
    ],
  },
  outcomes: {
    summary: [
      'Navigation updates made the split between library and discovery clearer for casual and focused listening modes.',
    ],
    metrics: [],
    highlights: [
      'Reduced steps to access saved playlists from 4 taps to 2.',
      'Created a clear separation between active listening and discovery mode.',
    ],
  },
  sections: [
    {
      id: 'problem-context',
      kind: 'narrative',
      eyebrow: 'Background',
      title: 'Problem & context',
      body: [
        {
          type: 'paragraph',
          text: 'Listeners struggled to find new content without feeling like they would lose track of their existing playlists and saved songs.',
        },
        {
          type: 'list',
          style: 'bulleted',
          items: [
            'Personal concept project inspired by real user feedback.',
            'Focused on the library and discovery flows on mobile.',
          ],
        },
      ],
    },
    {
      id: 'process-discovery',
      kind: 'narrative',
      eyebrow: 'Process',
      title: 'Discovery',
      body: [
        {
          type: 'list',
          style: 'bulleted',
          items: [
            'Reviewed existing UX heuristics for media apps.',
            'Mapped current Spotify mobile flows for key tasks.',
          ],
        },
      ],
    },
    {
      id: 'design-solution',
      kind: 'narrative',
      eyebrow: 'Design',
      title: 'Design approach',
      body: [
        {
          type: 'list',
          style: 'bulleted',
          items: [
            'Simplified the navigation hierarchy around Library vs. Home.',
            'Introduced quick filters and saved search entry points.',
          ],
        },
      ],
    },
    {
      id: 'before-after',
      kind: 'narrative',
      eyebrow: 'Result',
      title: 'Before & after',
      body: [
        {
          type: 'paragraph',
          text: 'A side-by-side comparison shows how the redesigned library reduces clutter and surfaces actions listeners need most often.',
        },
      ],
      media: [
        {
          id: 'before-state',
          type: 'image',
          src: '/images/projects/spotify-before.svg',
          alt: 'Original Spotify library layout before the redesign.',
          caption: 'Original library layout with less separation between discovery and saved content.',
        },
        {
          id: 'after-state',
          type: 'image',
          src: '/images/projects/spotify-after.svg',
          alt: 'Updated Spotify library layout after the redesign.',
          caption: 'Redesigned library layout with clearer entry points for discovery and saved items.',
        },
      ],
    },
  ],
  toc: {
    enabled: true,
    sectionIds: ['problem-context', 'process-discovery', 'design-solution', 'before-after'],
  },
};

export default spotifyCaseStudy;
