// src/content/case-studies/index.js
// Auto-discovers all case study modules in this folder.
// No manual imports needed when adding a new case study.

const modules = import.meta.glob("./*.js", { eager: true });

function extractCaseStudy(mod) {
  // 1) Prefer default export if it looks like a case study
  if (mod.default && typeof mod.default === "object" && mod.default.slug) {
    return mod.default;
  }

  // 2) Otherwise, look for the first named export that has a `slug`
  const candidates = Object.values(mod);
  const found = candidates.find(
    (value) => value && typeof value === "object" && "slug" in value
  );
  return found || null;
}

const caseStudies = Object.entries(modules)
  // exclude this index file itself
  .filter(([path]) => !path.endsWith("index.js"))
  .map(([, mod]) => extractCaseStudy(mod))
  .filter(Boolean);

export const CASE_STUDIES = caseStudies;

export function getCaseStudyBySlug(slug) {
  return CASE_STUDIES.find((cs) => cs.slug === slug) || null;
}
