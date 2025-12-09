export const resumeConfig = {
  pronunciation: {
    enabled: true,
    sources: [
      {
        src: '/audio/name-pronunciation-en.mp3',
        type: 'audio/mpeg',
        label: 'English',
        flag: 'US',
      },
      {
        src: '/audio/name-pronunciation-es.mp3',
        type: 'audio/mpeg',
        label: 'Español',
        flag: 'ES',
      },
    ],
  },
  recruiterEssentials: {
    show: true,
  },
  miniMap: {
    enabled: true,
  },
};

export const resumeSections = [
  { id: 'summary', label: 'Summary' },
  { id: 'recruiter-essentials', label: 'Recruiter essentials' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
];

export const RESUME = {
  summary: {
    intro: [
      'Principal product designer specializing in complex workflows, systems thinking, and high-trust collaboration with engineering and product leaders.',
      'I guide teams from ambiguous discovery to durable outcomes by pairing clear product storytelling with pragmatic design craft.',
    ],
    highlights: [
      'Shipped workflow automation, internal tooling, and design system initiatives for enterprise-scale teams.',
      'Partnered closely with engineering and PM to deliver on 6-week release cadences while protecting UX quality.',
      'Mentored designers and drove research programs that improved adoption and reduced time-to-value.',
    ],
  },
  recruiterEssentials: {
    location: 'Seattle, WA (Remote-friendly)',
    focus: 'Principal / Staff Product Design',
    availability: '2–4 weeks',
    collaboration: 'Product, engineering, and research leaders',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sergioantezana/' },
      { label: 'Email', url: 'mailto:hello@sergioantezana.com' },
    ],
  },
  experience: {
    roles: [
      {
        id: 'company-one-senior-ux-designer',
        company: 'Company One',
        title: 'Senior UX Designer',
        location: 'Remote',
        start: '2021-01',
        end: null,
        timeframeLabel: '2021–Present',
        era: 'recent',
        bullets: [
          'Led UX for a workflow automation platform used by enterprise customers.',
          'Worked closely with product and engineering to ship features on a 6-week cadence.',
          'Facilitated design critiques and cross-functional workshops to align on roadmap tradeoffs.',
        ],
        tags: ['Automation', 'B2B SaaS', 'Design systems'],
      },
      {
        id: 'company-two-ux-designer',
        company: 'Company Two',
        title: 'UX Designer',
        location: 'Hybrid',
        start: '2018-01',
        end: '2020-12',
        timeframeLabel: '2018–2020',
        era: 'mid',
        bullets: [
          'Designed internal tools for operations teams.',
          'Improved task completion time by 30% through better information hierarchy.',
          'Partnered with analytics to prioritize roadmap experiments and measure adoption.',
        ],
        tags: ['Internal tools', 'Operations', 'Research'],
      },
      {
        id: 'company-three-product-designer',
        company: 'Company Three',
        title: 'Product Designer',
        location: 'Onsite',
        start: '2015-06',
        end: '2017-12',
        timeframeLabel: '2015–2017',
        era: 'early',
        bullets: [
          'Owned end-to-end UX for a mobile-first scheduling product.',
          'Established reusable UI patterns that reduced build time for new features.',
          'Supported customer success with training materials and onboarding flows.',
        ],
        tags: ['Mobile', 'Onboarding', 'UI patterns'],
      },
    ],
  },
  education: {
    items: [
      {
        id: 'university-name-ba-design',
        school: 'University Name',
        degree: 'B.A. in Design',
        location: 'City, Country',
        timeframeLabel: '2012–2016',
        details: ['Graduated with honors', 'Focused on interaction design and research methods'],
      },
    ],
  },
  certifications: {
    items: [
      {
        id: 'ux-certification',
        title: 'UX Certification',
        issuer: 'Design Institute',
        timeframeLabel: 'Issued 2020',
        verificationUrl: 'https://example.com/verify/ux-cert',
        description: 'Validated advanced UX research and prototyping skills.',
      },
      {
        id: 'product-strategy-certificate',
        title: 'Product Strategy Certificate',
        issuer: 'PM Academy',
        timeframeLabel: 'Issued 2019',
        isVerified: true,
        description: 'Coursework covering discovery, prioritization, and go-to-market readiness.',
      },
    ],
  },
  skills: {
    clusters: [
      {
        id: 'product-strategy',
        label: 'Product Strategy',
        skills: [
          { name: 'Roadmapping', proficiency: 'strong' },
          { name: 'Opportunity sizing', proficiency: 'strong' },
          { name: 'Stakeholder alignment', proficiency: 'core' },
        ],
      },
      {
        id: 'interaction-design',
        label: 'Interaction Design',
        skills: [
          { name: 'Information architecture', proficiency: 'core' },
          { name: 'Prototyping', proficiency: 'core' },
          { name: 'Complex workflows', proficiency: 'strong' },
          { name: 'Usability testing', proficiency: 'strong' },
        ],
      },
      {
        id: 'systems-thinking',
        label: 'Systems Thinking',
        skills: [
          { name: 'Design systems', proficiency: 'core' },
          { name: 'Component standards', proficiency: 'strong' },
          { name: 'Cross-platform parity', proficiency: 'supporting' },
        ],
      },
      {
        id: 'tools',
        label: 'Tools & Collaboration',
        skills: [
          { name: 'Figma', proficiency: 'core' },
          { name: 'FigJam', proficiency: 'core' },
          { name: 'Miro', proficiency: 'supporting' },
          { name: 'Jira', proficiency: 'supporting' },
        ],
      },
    ],
  },
};
