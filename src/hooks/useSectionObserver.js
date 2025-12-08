import * as React from 'react';

export default function useSectionObserver(sectionIds = [], options) {
  const [entries, setEntries] = React.useState({});
  const isSupported = React.useMemo(
    () => typeof window !== 'undefined' && 'IntersectionObserver' in window,
    [],
  );
  const observerRef = React.useRef(null);
  const targetsRef = React.useRef({});

  React.useEffect(() => {
    if (!isSupported) return undefined;

    const observer = new IntersectionObserver((observerEntries) => {
      setEntries((prevEntries) => {
        const nextEntries = { ...prevEntries };

        observerEntries.forEach((entry) => {
          const id = entry.target?.dataset?.sectionId;
          if (!id) return;

          nextEntries[id] = {
            id,
            isIntersecting: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio,
          };
        });

        return nextEntries;
      });
    }, options);

    observerRef.current = observer;

    Object.values(targetsRef.current).forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [isSupported, options]);

  React.useEffect(() => {
    setEntries((prevEntries) => {
      const allowedIds = new Set(sectionIds);
      const nextEntries = {};

      allowedIds.forEach((id) => {
        if (prevEntries[id]) {
          nextEntries[id] = prevEntries[id];
        }
      });

      return nextEntries;
    });
  }, [sectionIds]);

  const registerSection = React.useCallback(
    (sectionId) => (node) => {
      if (!sectionId) return;

      const targets = targetsRef.current;
      const observer = observerRef.current;
      const previousNode = targets[sectionId];

      if (previousNode && observer) {
        observer.unobserve(previousNode);
      }

      if (node) {
        node.dataset.sectionId = sectionId;
        targets[sectionId] = node;
        if (observer) observer.observe(node);
      } else {
        delete targets[sectionId];
      }
    },
    [],
  );

  return { registerSection, entries, isSupported };
}
