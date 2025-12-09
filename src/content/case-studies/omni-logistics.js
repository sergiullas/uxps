export const omniLogistics = {
  id: "omni-logistics",
  slug: "omni-logistics",

  showInWork: true,
  workOrder: 10,

  meta: {
    title: "Unifying Fleet Management for Enterprise Logistics",
    description: "Consolidating 14 disparate data sources into a single command center, reducing decision time by 98% for fleet managers.",
    ogImage: "/images/case-studies/omni-logistics/og.png"
  },

  hero: {
    eyebrow: "Enterprise",
    title: "Unifying Fleet Management for Enterprise Logistics",
    subtitle: "Consolidating 14 disparate data sources into a single command center to prevent costly delays.",
    tags: ["Enterprise", "Systems Thinking", "Web"],
    image: {
      src: "/images/case-studies/omni-logistics/hero.png",
      alt: "Dark mode dashboard interface showing a map overlay with truck fleet locations"
    }
  },

  intro: {
    role: "Lead UX Designer",
    company: "OmniCorp International",
    timeframe: "2023-2024",
    location: "Chicago, IL (Hybrid)",
    team: ["Product Manager", "3 Engineers", "Data Scientist"],
    responsibilities: [
      "Stakeholder Workshops",
      "Information Architecture",
      "High-Fidelity UI"
    ],
    summary: [
      "OmniCorp's logistics division was bleeding money due to inefficiency. Dispatchers were managing a fleet of 500 trucks using Excel spreadsheets and legacy software.",
      "I was brought in to lead the design of 'Command Center,' a centralized web platform to replace their fragmented workflow."
    ]
  },

  outcomes: {
    summary: ["The new dashboard transformed the dispatch workflow, enabling real-time responses to traffic and weather events."],
    metrics: [
      { label: "Time-to-decision", value: "−98%", note: "Reduced from ~4 hours to ~5 minutes" },
      { label: "Fuel waste reduction", value: "$200k", note: "Annual savings projected from optimized routing" }
    ],
    highlights: [
      "Successfully retired 4 legacy tools",
      "Zero critical errors reported in first month of pilot"
    ]
  },

  sections: [
    {
      id: "context",
      eyebrow: "Background",
      title: "Context & Setting",
      body: [
        { type: "paragraph", text: "Logistics is a high-pressure environment. A delay of 30 minutes can cause a missed delivery window and thousands in fines." },
        { type: "paragraph", text: "The dispatch team was operating with high cognitive load, manually cross-referencing weather reports, traffic data, and driver logs." }
      ],
      media: []
    },
    {
      id: "problem",
      eyebrow: "Challenge",
      title: "The Data Fragmention",
      body: [
        { type: "paragraph", text: "During my audit, I found that dispatchers had to keep **14 different tabs open** just to track a single shipment. This fragmentation led to:" },
        { type: "list", style: "bulleted", items: [
          "Slow reaction times to road closures.",
          "High error rates in data entry.",
          "Dispatcher burnout due to eye strain and stress."
        ]}
      ],
      media: []
    },
    {
      id: "approach",
      eyebrow: "Process",
      title: "Shadowing & Systems Mapping",
      body: [
        { type: "paragraph", text: "I spent two weeks conducting **job shadowing** with logistics managers. I mapped their mental models to understand how they prioritized incoming data." },
        { type: "paragraph", text: "We discovered that 'Driver Safety' and 'Fuel Economy' were the top priorities, yet that data was buried deepest in the old system." }
      ],
      media: [
        {
          id: "workflow-diagram",
          type: "image",
          src: "/images/case-studies/omni-logistics/workflow-diagram.png",
          alt: "Flowchart comparing the old 14-step workflow against the new 3-step workflow",
          caption: "Simplifying the decision loop by aggregating data sources."
        }
      ]
    },
    {
      id: "solution",
      eyebrow: "Design",
      title: "The Command Center",
      body: [
        { type: "paragraph", text: "I designed a modular, dark-mode dashboard (essential for night shifts) that acts as a single source of truth." },
        { type: "paragraph", text: "Key features include:" },
        { type: "list", style: "bulleted", items: [
          "**Map-First Interface:** A live map overlay showing all trucks, color-coded by status (Moving, Idle, Delayed).",
          "**Predictive Alerts:** The system flags potential delays before they happen using historical traffic data.",
          "**Contextual Drawers:** Clicking a truck opens a side drawer with all necessary details, keeping the user in the main view."
        ]}
      ],
      media: [
        {
          id: "dashboard-ui",
          type: "image",
          src: "/images/case-studies/omni-logistics/dashboard-ui.png",
          alt: "Screenshot of the main dashboard showing the map and alert sidebar",
          caption: "The dark mode UI reduces eye strain during 12-hour shifts."
        }
      ]
    },
    {
      id: "outcomes",
      eyebrow: "Impact",
      title: "Outcomes",
      body: [
        { type: "paragraph", text: "The impact was immediate. By aggregating data, we removed the need for 'tab switching,' allowing dispatchers to focus on problem-solving." },
        { type: "paragraph", text: "The client reported a drastic reduction in late deliveries within the first quarter." }
      ],
      media: []
    },
    {
      id: "learnings",
      eyebrow: "Reflection",
      title: "Learnings",
      body: [
        { type: "paragraph", text: "This project taught me the value of **information density**. In consumer apps, whitespace is king. In enterprise logistics, data density is a tool. Finding the balance between 'clean' and 'informative' was the critical design challenge." }
      ],
      media: []
    }
  ],

  toc: {
    enabled: true,
    sectionIds: ["context", "problem", "approach", "solution", "outcomes", "learnings"]
  }
};