// src/config/site.config.js

export const siteConfig = {
  // Toggle sections on/off without touching code
  sections: {
    hero: true,
    work: true,
    about: true,
    resume: true,
    contact: true,
    blog: false, // planned for future
  },

  // Order in which sections appear on the Home page
  layout: ['hero', 'work', 'about', 'resume', 'contact'],
};
