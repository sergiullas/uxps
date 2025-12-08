import { spotifyCaseStudy } from './spotify.js';

export const CASE_STUDIES = [spotifyCaseStudy];

export function getCaseStudyBySlug(slug) {
  return CASE_STUDIES.find((cs) => cs.slug === slug) || null;
}
