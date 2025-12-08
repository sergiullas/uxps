import { siteMeta } from './siteMeta.js';

export const contactContent = {
  heading: 'Contact',
  body: 'Ready to collaborate or need a deeper case study? Let’s talk.',
  primaryAction: {
    label: `Email ${siteMeta.author}`,
    href: `mailto:${siteMeta.email}`,
  },
  secondaryNote: `Prefer async? ${siteMeta.email}`,
};
