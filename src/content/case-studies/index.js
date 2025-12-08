// src/content/case-studies/index.js

import spotifySummary from './spotify/summary.js';

// NOTE:
// For Phase 2, we intentionally keep manual imports for clarity.
// In a later phase (Case Study Detail + Dynamic Loading), this will
// be replaced with Vite's import.meta.glob to auto-discover summaries.
export const CASE_STUDIES = [spotifySummary];
