import * as React from 'react';
import { getMotionComponent } from './getMotionComponent.js';
import { useMotionConfig } from './MotionProvider.jsx';
import { useInView } from './useInView.js';

export default function SlideUpOnScroll({
  as = 'section',
  threshold = 0.2,
  delay = 0,
  children,
  ...props
}) {
  const { prefersReducedMotion, motion } = useMotionConfig();
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  const duration = motion?.durations?.medium ?? 0.24;

  if (prefersReducedMotion) {
    const Component = as || 'div';
    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  }

  const MotionComponent = getMotionComponent(as || 'section');

  return (
    <MotionComponent
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
