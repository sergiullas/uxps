import { motion } from 'framer-motion';

export function getMotionComponent(component) {
  if (typeof component === 'string') {
    return motion[component] || motion.div;
  }
  return motion(component, { forwardMotionProps: true });
}
