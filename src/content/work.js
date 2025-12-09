// src/content/work.js
// Work hub items are derived from CASE_STUDIES. Do not hand-edit arrays here.

import { CASE_STUDIES } from './case-studies/index.js';

export const workContent = {
  heading: 'Work',
  selectedHeading: 'Selected work',
  description:
    'Case studies are being refreshed for the final handoff. In the meantime, here are the focus areas and outcomes guiding the next releases.',
};

function getWorkOrder(cs) {
  if (typeof cs.workOrder === 'number') return cs.workOrder;
  return 999; // default: push to end
}

export const WORK_ITEMS = CASE_STUDIES
  // 1) Filter by showInWork flag (default true)
  .filter((cs) => cs.showInWork !== false)
  // 2) Sort by workOrder
  .sort((a, b) => getWorkOrder(a) - getWorkOrder(b))
  // 3) Map to the shape the Work hub expects
  .map((cs) => ({
    id: cs.id || cs.slug,
    slug: cs.slug,
    title: cs.hero?.title || cs.meta?.title,
    summary: cs.hero?.subtitle || cs.meta?.description,
    tags: cs.hero?.tags || [],
    image: cs.hero?.image?.src || null,
  }));

export function getWorkItemBySlug(slug) {
  return WORK_ITEMS.find((item) => item.slug === slug) || null;
}
