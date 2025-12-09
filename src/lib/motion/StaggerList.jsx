import * as React from 'react';
import { getMotionComponent } from './getMotionComponent.js';
import { useMotionConfig } from './MotionProvider.jsx';
import { useInView } from './useInView.js';

export default function StaggerList({
  as = 'div',
  interval = 0.06,
  delay = 0,
  triggerOnScroll = true,
  threshold = 0.2,
  children,
  ...props
}) {
  const { prefersReducedMotion, motion } = useMotionConfig();
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  const duration = motion?.durations?.short ?? 0.18;
  const shouldAnimate = !prefersReducedMotion && (!triggerOnScroll || inView);
  const childrenArray = React.Children.toArray(children);

  if (!shouldAnimate) {
    const Component = as || 'div';
    return (
      <Component ref={triggerOnScroll ? ref : undefined} {...props}>
        {children}
      </Component>
    );
  }

  const MotionComponent = getMotionComponent(as || 'div');
  const MotionChild = getMotionComponent('div');

  return (
    <MotionComponent
      ref={triggerOnScroll ? ref : undefined}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: interval, delayChildren: delay },
        },
      }}
      {...props}
    >
      {childrenArray.map((child, index) => (
        <MotionChild
          key={child.key ?? index}
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0, transition: { duration } },
          }}
        >
          {child}
        </MotionChild>
      ))}
    </MotionComponent>
  );
}
