export const zenithBanking = {
  id: "zenith-banking",
  slug: "zenith-banking",

  meta: {
    title: "Redefining Trust for the Digital-First Banking Era",
    description: "A complete rebrand and web redesign that increased landing page conversion by 22% for a legacy financial institution.",
    ogImage: "/images/case-studies/zenith-banking/og.png"
  },

  hero: {
    eyebrow: "UX Strategy",
    title: "Redefining Trust for Digital-First Banking",
    subtitle: "Transforming a legacy institution's identity to compete with neobanks and capture a younger demographic.",
    tags: ["Fintech", "UX Strategy", "Cross-platform"],
    image: {
      src: "/images/case-studies/zenith-banking/hero.png",
      alt: "Split screen showing the old stiff branding versus the new approachable mobile interface"
    }
  },

  intro: {
    role: "Senior Product Designer",
    company: "Zenith Financial",
    timeframe: "2023 (8 Weeks)",
    location: "New York, NY",
    team: ["Creative Director", "Copywriter", "Frontend Dev"],
    responsibilities: [
      "Competitive Audit",
      "Design Systems",
      "Visual Identity"
    ],
    summary: [
      "Zenith Financial, a 50-year-old institution, was losing market share to agile neobanks. Their digital presence felt 'corporate' and 'cold,' alienating Gen-Z customers.",
      "I led the strategy and execution of a rebrand aimed at shifting their identity from 'Authority' to 'Partner'."
    ]
  },

  outcomes: {
    summary: ["The rebrand successfully modernized Zenith's image, resulting in higher engagement across all digital channels."],
    metrics: [
      { label: "Conversion Rate", value: "+22%", note: "Landing page sign-ups post-launch" },
      { label: "Brand Sentiment", value: "Positive", note: "Shifted from 'Stiff' to 'Helpful' in user surveys" }
    ],
    highlights: [
      "Launched the 'Summit' design system",
      "Unified visual language across Web, iOS, and Android"
    ]
  },

  sections: [
    {
      id: "context",
      eyebrow: "Background",
      title: "Context & Setting",
      body: [
        { type: "paragraph", text: "Trust in banking has evolved. It no longer means marble columns and suits; it means transparency, speed, and accessibility." },
        { type: "paragraph", text: "Zenith's existing visual language—dark blues, serifs, and stock photography of handshakes—signaled 'old guard' to younger users." }
      ],
      media: []
    },
    {
      id: "problem",
      eyebrow: "Challenge",
      title: "The Identity Crisis",
      body: [
        { type: "paragraph", text: "The core challenge was balancing **heritage with modernity**. We couldn't alienate the existing older customer base, but we had to attract new growth." },
        { type: "paragraph", text: "Technical constraints were also an issue; the old design system was fragmented, leading to inconsistent UI across platforms." }
      ],
      media: []
    },
    {
      id: "approach",
      eyebrow: "Process",
      title: "Audit & Strategy",
      body: [
        { type: "paragraph", text: "I conducted a **competitive audit** of the fintech landscape. We found a 'sea of blue'—most competitors used similar color palettes." },
        { type: "paragraph", text: "We chose to pivot to a warmer, more human palette (Earth tones mixed with vibrant accents) and accessible typography." }
      ],
      media: [
        {
          id: "style-guide",
          type: "image",
          src: "/images/case-studies/zenith-banking/style-guide.png",
          alt: "Style guide showing the new typography, color palette, and logo construction",
          caption: "The 'Summit' design system focuses on warmth and accessibility."
        }
      ]
    },
    {
      id: "solution",
      eyebrow: "Design",
      title: "The 'Summit' System",
      body: [
        { type: "paragraph", text: "We built a modular design system named 'Summit.' It prioritized mobile legibility and clear data visualization." },
        { type: "paragraph", text: "The new homepage features:" },
        { type: "list", style: "bulleted", items: [
          "**Conversational Copy:** replacing banking jargon with clear benefits.",
          "**Dynamic Motion:** Subtle animations that guide the user down the page.",
          "**Inclusive Imagery:** Photography that represents a diverse customer base."
        ]}
      ],
      media: [
        {
          id: "homepage-redesign",
          type: "image",
          src: "/images/case-studies/zenith-banking/homepage-redesign.png",
          alt: "Long scroll view of the new responsive marketing website",
          caption: "The new site combines storytelling with clear calls-to-action."
        }
      ]
    },
    {
      id: "outcomes",
      eyebrow: "Impact",
      title: "Outcomes",
      body: [
        { type: "paragraph", text: "The refresh worked. The new landing page saw a 22% increase in account openings within the first month." },
        { type: "paragraph", text: "Internal teams also reported that the 'Summit' system sped up their development cycles by providing reusable components." }
      ],
      media: []
    },
    {
      id: "learnings",
      eyebrow: "Reflection",
      title: "Learnings",
      body: [
        { type: "paragraph", text: "Stakeholder management was key. Moving away from 'Trustworthy Blue' was scary for the executives. I learned that **using data to back up aesthetic choices** is the only way to sell a bold rebrand." }
      ],
      media: []
    }
  ],

  toc: {
    enabled: true,
    sectionIds: ["context", "problem", "approach", "solution", "outcomes", "learnings"]
  }
};