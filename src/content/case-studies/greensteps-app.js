export const greenStepsApp = {
  id: "greensteps-app",
  slug: "greensteps-app",

  meta: {
    title: "Gamifying Carbon Reduction for the Eco-Conscious Commuter",
    description: "How I used behavioral psychology and gamification to increase retention by 65% in a sustainability tracking app.",
    ogImage: "/images/case-studies/greensteps-app/og.png"
  },

  hero: {
    eyebrow: "Product Design",
    title: "Gamifying Carbon Reduction for Daily Commuters",
    subtitle: "Turning tedious carbon tracking into a habit-forming 'virtual forest' that grows with every sustainable choice.",
    tags: ["Consumer (B2B)", "Interaction Design", "Mobile"],
    image: {
      src: "/images/case-studies/greensteps-app/hero.png",
      alt: "Three iPhone screens showing the GreenSteps forest interface and tracking dashboard"
    }
  },

  intro: {
    role: "Product Designer",
    company: "Self-Initiated",
    timeframe: "2023 (3 Months)",
    location: "Remote, US",
    team: ["Solo Project"],
    responsibilities: [
      "User Research",
      "Interaction Design",
      "Prototyping"
    ],
    summary: [
      "In early 2023, I identified a gap in the sustainability market: users wanted to track their impact, but existing tools were data-heavy and demoralizing.",
      "I set out to design an iOS experience that used positive reinforcement loops to make carbon tracking feel like a game rather than a chore."
    ]
  },

  outcomes: {
    summary: ["By shifting the mental model from 'data entry' to 'world-building', testing showed a massive leap in user retention."],
    metrics: [
      { label: "Daily Active Use", value: "+65%", note: "Compared to standard form-based competitor apps" },
      { label: "Task Completion Rate", value: "98%", note: "Logging a trip takes <10 seconds" }
    ],
    highlights: [
      "Created a scalable 'virtual forest' design system",
      "Validated the 'play' concept through 15 user tests"
    ]
  },

  sections: [
    {
      id: "context",
      eyebrow: "Background",
      title: "Context & Setting",
      body: [
        { type: "paragraph", text: "The sustainability tech market is flooded with 'calculators'—apps that ask for detailed utility bills and mileage logs. While accurate, they fail to engage users daily." },
        { type: "paragraph", text: "I started this project to explore how **gamification principles** could be applied to ethical consumption without feeling trivial or manipulative." }
      ],
      media: []
    },
    {
      id: "problem",
      eyebrow: "Challenge",
      title: "The Retention Problem",
      body: [
        { type: "paragraph", text: "Competitor analysis revealed a steep drop-off: 40% of users abandoned traditional tracking apps after week one. The core problems were:" },
        { type: "list", style: "bulleted", items: [
          "High friction: Entering data required too many taps.",
          "Negative reinforcement: Apps focused on 'guilt' (how much CO2 you produced) rather than progress.",
          "Lack of visual reward: Numbers on a graph didn't feel satisfying."
        ]}
      ],
      media: []
    },
    {
      id: "approach",
      eyebrow: "Process",
      title: "Psychology & Prototyping",
      body: [
        { type: "paragraph", text: "I utilized the **Octalysis Framework** for gamification to identify core drives. I focused on 'Ownership & Possession'—the idea that users care more about something they have built." },
        { type: "paragraph", text: "I sketched low-fidelity concepts where sustainable actions (biking, recycling) earned 'water' and 'sunlight' currency." }
      ],
      media: [
        {
          id: "lofi-sketches",
          type: "image",
          src: "/images/case-studies/greensteps-app/lofi-sketches.png",
          alt: "Hand-drawn wireframes showing the logic of earning currency through logging trips",
          caption: "Early exploration of the 'Action -> Reward -> Growth' loop."
        }
      ]
    },
    {
      id: "solution",
      eyebrow: "Design",
      title: "The Virtual Forest",
      body: [
        { type: "paragraph", text: "The final solution is a vibrant, gesture-based iOS app. Instead of filling out forms, users drag-and-drop 'habit tokens' into their forest." },
        { type: "paragraph", text: "Key design decisions included:" },
        { type: "list", style: "bulleted", items: [
          "**Gestural Input:** Swipe up to log a commute; swipe down to log recycling.",
          "**Visual Growth:** As metrics improve, trees in the background literally grow larger and greener.",
          "**Haptic Feedback:** Using meaningful vibration patterns to make digital actions feel physical."
        ]}
      ],
      media: [
        {
          id: "high-fidelity-ui",
          type: "image",
          src: "/images/case-studies/greensteps-app/high-fidelity-ui.png",
          alt: "High fidelity mockup of the main dashboard with the forest visualization",
          caption: "The forest reacts in real-time to the user's logged habits."
        }
      ]
    },
    {
      id: "outcomes",
      eyebrow: "Impact",
      title: "Outcomes",
      body: [
        { type: "paragraph", text: "User testing with 20 participants showed that the 'world-building' aspect significantly reduced the perception of effort." },
        { type: "paragraph", text: "The prototype demonstrated that gamification can drive serious behavioral change when applied with empathy." }
      ],
      media: []
    },
    {
      id: "learnings",
      eyebrow: "Reflection",
      title: "Learnings",
      body: [
        { type: "paragraph", text: "I learned that **micro-interactions matter**. The success of the app relied heavily on the 'satisfaction' of the drag-and-drop animation. If I were to continue, I would explore social features to allow users to grow forests together." }
      ],
      media: []
    }
  ],

  toc: {
    enabled: true,
    sectionIds: ["context", "problem", "approach", "solution", "outcomes", "learnings"]
  }
};