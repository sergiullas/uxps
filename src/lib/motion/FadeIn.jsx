import * as React from 'react';
import { getMotionComponent } from './getMotionComponent.js';
import { useMotionConfig } from './MotionProvider.jsx';

export default function FadeIn({ as = 'div', delay = 0, durationOverride, children, ...props }) {
  const { prefersReducedMotion, motion } = useMotionConfig();
  const duration = durationOverride ?? motion?.durations?.short ?? 0.18;

  if (prefersReducedMotion) {
    const Component = as || 'div';
    return <Component {...props}>{children}</Component>;
  }

  const MotionComponent = getMotionComponent(as || 'div');

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
