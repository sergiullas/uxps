export const spotifyCaseStudy = {
  id: 'spotify-redesign',
  slug: 'spotify-redesign',

  showInWork: true,
  workOrder: 30,
  meta: {
    title: 'Spotify Mobile Experience Redesign',
    description:
      'Redesigned the Spotify mobile experience to reduce friction in discovery and improve library navigation.',
    ogImage: '/images/projects/spotify-thumb.svg',
  },
  brand: {
    primaryColor: '#22c55e',
    accentColor: '#15803d',
  },
  accessGate: {
    enabled: true,
    passwordHash: 'e5d743da2dd62ecb119728a10b73d616eca3d33b086673dff9febe4574ad8f70',
    title: 'Available by request',
    description: 'This concept includes sensitive research notes. Enter the phrase shared with you to view the full case study.',
    hint: 'Tip: check the access phrase in the invite email.',
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
          id: 'library-comparison',
          type: 'beforeAfter',
          before: '/images/projects/spotify-before.svg',
          after: '/images/projects/spotify-after.svg',
          alt: 'Before and after comparison of the Spotify library layout.',
          caption: 'Side-by-side comparison of the original and redesigned library screens.',
          beforeLabel: 'Before redesign',
          afterLabel: 'After redesign',
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
