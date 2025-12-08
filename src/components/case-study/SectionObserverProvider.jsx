import * as React from 'react';
import useActiveSection from '../../hooks/useActiveSection.js';
import useSectionObserver from '../../hooks/useSectionObserver.js';
import { SECTION_OBSERVER_OPTIONS } from '../../utils/sectionObserverConfig.js';

const SectionObserverContext = React.createContext(null);

export function SectionObserverProvider({ sections = [], children }) {
  const sectionIds = React.useMemo(
    () => sections.map((section) => section.id).filter(Boolean),
    [sections],
  );

  const { registerSection, entries, isSupported } = useSectionObserver(
    sectionIds,
    SECTION_OBSERVER_OPTIONS,
  );
  const activeSectionId = useActiveSection(sections, entries);

  const value = React.useMemo(
    () => ({
      registerSection,
      entries,
      activeSectionId,
      sectionIds,
      isObserverSupported: isSupported,
    }),
    [registerSection, entries, activeSectionId, sectionIds, isSupported],
  );

  return <SectionObserverContext.Provider value={value}>{children}</SectionObserverContext.Provider>;
}

export function useSectionObserverContext() {
  const context = React.useContext(SectionObserverContext);
  if (!context) {
    throw new Error('useSectionObserverContext must be used within a SectionObserverProvider');
  }

  return context;
}
