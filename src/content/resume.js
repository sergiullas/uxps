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
    companies: [
      {
        id: 'lumen-systems-studio',
        companyName: 'Lumen Systems Studio',
        companyLogo: null,
        location: 'Seattle, WA · Remote-first',
        startDate: '2020-05',
        endDate: null,
        currentEraLabel: 'UX Strategy & Systems Leadership',
        summary:
          'Designing workflow automation and design system programs for data-heavy, globally distributed teams.',
        roles: [
          {
            id: 'lumen-principal-product-designer',
            title: 'Principal Product Designer',
            employmentType: 'Full-time',
            startDate: '2023-06',
            endDate: null,
            location: 'Remote',
            isCurrent: true,
            era: 'recent',
            summary:
              'Partnering with product and engineering leadership to set the UX direction for an automation platform while mentoring senior designers.',
            bullets: [
              'Defined an experience north star that aligned automation, workflow orchestration, and AI-assist features under a single mental model.',
              'Built a timeline-based interaction pattern that reduced task creation time by 35% for operations teams.',
              'Scaled a design system refresh that improved component adoption and cut handoff churn across 4 product squads.',
            ],
            tags: ['Design systems', 'Automation', 'Leadership', 'AI assist'],
          },
          {
            id: 'lumen-lead-ux-strategist',
            title: 'Lead UX Strategist',
            employmentType: 'Full-time',
            startDate: '2021-03',
            endDate: '2023-05',
            location: 'Remote',
            isCurrent: false,
            era: 'recent',
            summary:
              'Led discovery and delivery for enterprise workflow tools, balancing speed-to-launch with quality standards.',
            bullets: [
              'Ran co-design sessions with PM/Eng to de-risk roadmap bets and focus releases on measurable workflow wins.',
              'Introduced service-blueprint reviews that surfaced integration gaps early, reducing post-launch rework.',
              'Mentored designers on storytelling and prototyping to improve decision speed with senior stakeholders.',
            ],
            tags: ['Service blueprinting', 'Product discovery', 'Design facilitation'],
          },
        ],
      },
      {
        id: 'atlas-collaboration',
        companyName: 'Atlas Collaboration',
        companyLogo: null,
        location: 'New York, NY (Hybrid)',
        startDate: '2017-02',
        endDate: '2020-12',
        currentEraLabel: 'Workflow Platform Foundations',
        summary:
          'Shipped collaboration tooling, admin governance, and operational dashboards for a multi-product platform.',
        roles: [
          {
            id: 'atlas-lead-product-designer',
            title: 'Lead Product Designer',
            employmentType: 'Full-time',
            startDate: '2019-01',
            endDate: '2020-12',
            location: 'Hybrid',
            isCurrent: false,
            era: 'mid',
            summary:
              'Led design for governance and admin experiences that balanced compliance with usability.',
            bullets: [
              'Designed an approvals workflow that cut provisioning time from days to hours for enterprise tenants.',
              'Established admin dashboard standards that unified navigation, metrics, and role-based permissions.',
              'Partnered with research to baseline satisfaction and track adoption lift across quarterly releases.',
            ],
            tags: ['Governance', 'Admin UX', 'Design ops'],
          },
          {
            id: 'atlas-senior-ux-designer',
            title: 'Senior UX Designer',
            employmentType: 'Full-time',
            startDate: '2017-02',
            endDate: '2018-12',
            location: 'Hybrid',
            isCurrent: false,
            era: 'mid',
            summary:
              'Owned collaboration features that connected messaging, file sharing, and scheduling flows.',
            bullets: [
              'Launched cross-product search and filtering patterns that increased task findability by 28%.',
              'Co-created an accessibility checklist with engineering that improved WCAG adherence in new features.',
              'Piloted design QA rituals that reduced visual regressions and support tickets after major releases.',
            ],
            tags: ['Collaboration', 'Accessibility', 'Design QA'],
          },
        ],
      },
      {
        id: 'northwind-labs',
        companyName: 'Northwind Labs',
        companyLogo: null,
        location: 'Austin, TX',
        startDate: '2013-08',
        endDate: '2016-12',
        currentEraLabel: 'Early Craft & Research',
        summary: 'Built foundational UX craft through research-driven mobile and web product work.',
        roles: [
          {
            id: 'northwind-product-designer',
            title: 'Product Designer',
            employmentType: 'Full-time',
            startDate: '2014-06',
            endDate: '2016-12',
            location: 'Onsite',
            isCurrent: false,
            era: 'early',
            summary:
              'Owned UX for a scheduling and resource allocation product serving field teams.',
            bullets: [
              'Introduced reusable UI patterns that cut engineering build time for new workflows by ~20%.',
              'Ran on-site research with field managers to prioritize roadmap improvements and validate prototypes.',
              'Supported customer success with training materials, onboarding flows, and live-release QA.',
            ],
            tags: ['Field research', 'Onboarding', 'UI patterns'],
          },
          {
            id: 'northwind-ux-researcher',
            title: 'UX Researcher & Designer',
            employmentType: 'Full-time',
            startDate: '2013-08',
            endDate: '2014-05',
            location: 'Onsite',
            isCurrent: false,
            era: 'early',
            summary:
              'Partnered with PMs to validate early product-market fit and define MVP scopes.',
            bullets: [
              'Conducted generative research that informed the initial product positioning and pricing strategy.',
              'Mapped user journeys that exposed onboarding friction, driving a 15% lift in activation.',
              'Documented research playbooks to help PMs and engineers run lightweight validation sessions.',
            ],
            tags: ['Research', 'Journey mapping', 'MVP definition'],
          },
        ],
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
