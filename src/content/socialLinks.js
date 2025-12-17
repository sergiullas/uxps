export const socialLinks = {
  settings: {
    locations: ['hero', 'footer', 'contact', 'resume'],
    iconSize: {
      hero: 'medium',
      footer: 'small',
      contact: 'medium',
      resume: 'small',
    },
    gap: {
      hero: 2,
      footer: 1.5,
      contact: 2,
      resume: 1.5,
    },
    printMode: 'hide',
  },
  platforms: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sergioantezana',
      showIn: ['hero', 'footer', 'contact', 'resume'],
      ariaLabel: 'Visit my LinkedIn profile',
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: 'GitHub',
      url: 'https://github.com/sergioantezana',
      showIn: ['hero', 'footer', 'contact'],
      ariaLabel: 'View my GitHub repositories',
    },
    {
      id: 'website',
      label: 'Website',
      icon: 'Language',
      url: 'https://sergioantezana.com',
      showIn: ['footer'],
      ariaLabel: 'Visit my personal website',
    },
  ],
};

export default socialLinks;
