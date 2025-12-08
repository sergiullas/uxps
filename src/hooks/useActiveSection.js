import * as React from 'react';

export default function useActiveSection(sections = [], entries = {}) {
  return React.useMemo(() => {
    const sectionIds = sections.map((section) => section.id).filter(Boolean);
    if (!sectionIds.length) return null;

    let activeSectionId = sectionIds[0];
    let bestRatio = -1;

    sectionIds.forEach((id) => {
      const entry = entries[id];
      if (entry?.isIntersecting && typeof entry.intersectionRatio === 'number') {
        if (entry.intersectionRatio > bestRatio) {
          bestRatio = entry.intersectionRatio;
          activeSectionId = id;
        }
      }
    });

    return activeSectionId;
  }, [entries, sections]);
}
