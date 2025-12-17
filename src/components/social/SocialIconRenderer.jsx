import * as React from 'react';
import { socialIconMap } from './socialIconMap.js';

export default function SocialIconRenderer({ iconName, ...props }) {
  if (!iconName) return null;

  const Icon = socialIconMap[iconName];

  if (!Icon) {
    if (import.meta?.env?.DEV) {
      console.warn(
        `[SocialIconRenderer] Unknown icon "${iconName}". Add it to src/components/social/socialIconMap.js`,
      );
    }
    return null;
  }

  return <Icon {...props} />;
}
