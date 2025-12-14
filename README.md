# UX Portfolio Starter  
**A human-in-the-loop product built with an AI team**

> A living experiment in how designers can collaborate with multiple AI agents—intentionally, responsibly, and at production quality.

---

## Why this exists

This repository is the result of a simple but uncomfortable question:

**What actually happens when a designer treats AI as a real team—  
with roles, reviews, standards, and accountability—instead of a shortcut?**

Not prompts.  
Not demos.  
Not hype.

A real product. Real constraints. Real tradeoffs.

The **UX Portfolio Starter** is both:
- A **production-ready portfolio framework**, and
- A **case study in AI-augmented design and development workflows**

---

## What you are looking at

This project is built using a **structured, phase-based workflow** involving both humans and AI agents:

- **Planning** — Product roadmap and phased architecture defined by humans  
- **Review** — Each phase reviewed *before* code is written  
- **Development** — An AI developer builds from explicit stories and acceptance criteria  
- **Verification** — A second AI validates implementation fidelity  
- **QA** — Pull requests are reviewed and sent back when issues are found  
- **Merge & Deploy** — Human-led deployment and functional testing  
- **Design Review** — Accessibility and interaction quality reviewed post-implementation  

This cycle repeats until the phase is stable.

> AI does the work.  
> Humans set the bar.

---

## What this is **not**

- ❌ A “look what AI can do” toy project  
- ❌ A no-code experiment  
- ❌ Prompt engineering theater  
- ❌ A generic portfolio template  

This repo documents **decisions, failures, revisions, and standards**—not just outcomes.

---

## Who this is for

- UX & Product Designers exploring AI-augmented workflows  
- Design leaders thinking beyond “AI tools” toward **AI systems**  
- Engineers curious how design intent survives automation  
- Hiring managers evaluating systems-level thinking  
- Anyone tired of shallow AI demos

---

## How to read this repo

1. **[Project Phases](https://github.com/sergiullas/uxps/wiki/Roadmap-updates)** — Each phase has intent, scope, and acceptance criteria  
2. **Pull Requests** — Where most learning actually happens  
3. **Commits** — Trace how feedback turns into architecture  

This is a **learning artifact**, not just a codebase.

---

## Status

🟢 **Active development**  
This repo evolves as the workflow evolves. Expect iteration, refactors, and honest documentation of what does *not* work.

---

## Development setup

This project uses [Vite](https://vitejs.dev/) with React (JavaScript) and Material UI. To get started:

```bash
npm install
npm run dev
```

Additional scripts:

- `npm run build` – build the production bundle.
- `npm run preview` – preview the production build locally.
- `npm run lint` – run ESLint with the React and accessibility presets.
- `npm run format` – format files with Prettier.

## Project structure

Key folders inside `src/`:

- `components/` – shared UI, module, and core components.
- `config/` – site configuration and navigation definitions.
- `content/` – content and data entries (e.g., personal profile).
- `hooks/` – reusable React hooks.
- `pages/` – route-level components.
- `styles/` – global and shared styling helpers.
- `utils/` – utility helpers.

## Routing

The starter wiring uses `react-router-dom` with placeholder routes for `/` and a catch-all 404 page. Replace these pages as you expand the application in later phases.
