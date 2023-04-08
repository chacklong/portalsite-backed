import AuthLogo from './extensions/person.png';
import MenuLogo from './extensions/person.png';
import favicon from './extensions/person.png';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['zh-Hans'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() {},
};
