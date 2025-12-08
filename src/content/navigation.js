import { siteMeta } from './siteMeta.js';

export const mainNav = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Resume', href: '/#resume' },
  { label: 'Contact', href: '/#contact' },
];

export const footerNav = [
  { label: 'LinkedIn', href: siteMeta.social.linkedin },
  { label: 'GitHub', href: siteMeta.social.github },
  { label: 'Email', href: `mailto:${siteMeta.email}` },
];
