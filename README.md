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

## Plain-English guide: how to use this app

If you are new to coding, use this section like a checklist.

### 1) What this app does

This is a personal portfolio website template. You can use it to show:
- your intro and headline,
- your work/case studies,
- your resume and experience,
- and your contact information.

You mostly edit text/content files, then the website updates automatically when running locally.

### 2) What you need before starting

- A computer with internet
- [Node.js](https://nodejs.org/) installed (choose the **LTS** version)
- A code editor (recommended: [VS Code](https://code.visualstudio.com/))
- Basic comfort with copy/paste in a terminal

### 3) First-time setup (copy these commands)

Open a terminal in this project folder and run:

```bash
npm install
npm run dev
```

Then open the local link shown in the terminal (usually `http://localhost:5173`).

If everything works, you will see the portfolio in your browser.

### 4) Everyday use (after first setup)

Each time you want to work on your site:

```bash
npm run dev
```

Keep this terminal window open while editing. The page auto-refreshes as you save files.

### 5) Where to edit your content

Most of your personal content lives in `src/content/`.

Start with these files:

- `src/content/siteMeta.js` → your name, role, email, site title, footer text
- `src/content/hero.js` → homepage headline and intro text
- `src/content/work.js` + `src/content/case-studies/` → work/case-study cards and details
- `src/content/resume.js` → summary, experience, skills, education, certifications
- `src/content/navigation.js` → top navigation links

Tip: change one thing, save, and check your browser to confirm before making more edits.

### 6) Commands explained in simple words

- `npm run dev` → starts your local website so you can edit and preview
- `npm run build` → creates a production-ready version for deployment
- `npm run preview` → previews the production build locally
- `npm run lint` → checks code style and common mistakes
- `npm run format` → auto-formats files

### 7) How to publish your site

This repo already includes deployment config for platforms like **Vercel** and **Netlify**.

General publish flow:
1. Push your changes to GitHub.
2. Connect your GitHub repo to Vercel or Netlify.
3. Use default build settings:
   - Build command: `npm run build`
   - Output folder: `dist`
4. Deploy.

### 8) Common issues (quick fixes)

- **“npm: command not found”**
  - Install Node.js LTS, then restart terminal.

- **Port already in use / localhost won’t open**
  - Stop other running dev servers and run `npm run dev` again.

- **Changes not appearing**
  - Make sure you saved the file.
  - Hard-refresh browser (`Ctrl+Shift+R` / `Cmd+Shift+R`).

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

## Project structure

Key folders inside `src/`:

- `components/` – shared UI, module, and core components
- `config/` – site configuration and navigation definitions
- `content/` – content and data entries (where most customization happens)
- `hooks/` – reusable React hooks
- `pages/` – route-level components
- `styles/` – global and shared styling helpers
- `utils/` – utility helpers

## Routing

The starter wiring uses `react-router-dom` with routes for:
- `/` (home)
- `/work`
- `/resume`
- a catch-all 404 page

You can add or remove routes as your portfolio evolves.
