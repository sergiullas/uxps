# uxps

A theme-first React portfolio system that makes UX designers look like they hired a team of UX engineers, customizable with simple config files.

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
