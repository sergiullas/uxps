import * as React from 'react';

export function useInView({ threshold = 0.2, triggerOnce = true } = {}) {
  const [inView, setInView] = React.useState(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver !== 'function') {
      return true;
    }
    return false;
  });

  const ref = React.useRef(null);

  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver !== 'function') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (triggerOnce) {
              observer.disconnect();
            }
          } else if (!triggerOnce) {
            setInView(false);
          }
        });
      },
      { threshold }
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
      observer.disconnect();
    };
  }, [threshold, triggerOnce]);

  return { ref, inView };
}

export default useInView;
