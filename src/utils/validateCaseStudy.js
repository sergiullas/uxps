export function validateCaseStudy(caseStudy) {
  if (!caseStudy) return;

  const warnings = [];

  if (!caseStudy.meta?.title) {
    warnings.push('Missing meta.title');
  }

  if (!caseStudy.meta?.description) {
    warnings.push('Missing meta.description');
  }

  if (!caseStudy.slug) {
    warnings.push('Missing slug');
  }

  const sections = caseStudy.sections || [];
  sections.forEach((section, index) => {
    if (!section.id) {
      warnings.push(`Section at index ${index} is missing an id`);
    }

    const mediaItems = [];
    if (section.media) mediaItems.push(section.media);
    if (Array.isArray(section.gallery)) mediaItems.push(...section.gallery);

    mediaItems.forEach((media, mediaIndex) => {
      if (media && !media.alt) {
        warnings.push(`Media item missing alt text (section ${section.id || index}, item ${mediaIndex})`);
      }
    });
  });

  if (!warnings.length) return;

  warnings.forEach((warning) => {
    // eslint-disable-next-line no-console
    console.warn(`[CaseStudy Validation Warning] ${warning}`);
  });
}
