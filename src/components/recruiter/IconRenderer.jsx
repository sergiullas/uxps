import * as React from 'react';
import { iconMap } from './iconMap';

export default function IconRenderer({ iconName, 'aria-label': ariaLabel, className, ...props }) {
  if (!iconName) return null;

  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    const isProd = typeof import.meta !== 'undefined' ? import.meta.env?.PROD : true;

    if (!isProd) {
      // eslint-disable-next-line no-console
      console.warn(
        `[IconRenderer] Icon "${iconName}" not found in iconMap. Add it to src/components/recruiter/iconMap.js`
      );
    }

    return null;
  }

  const a11yProps = ariaLabel ? { 'aria-label': ariaLabel } : { 'aria-hidden': true };

  return (
    <IconComponent
      className={['icon-renderer', className].filter(Boolean).join(' ')}
      {...a11yProps}
      {...props}
    />
  );
}
