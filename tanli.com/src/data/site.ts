export type SiteSocialLink = {
  href: string;
  ariaLabel: string;
  icon: string;
};

export type SiteLinkCard = {
  href: string;
  title: string;
  subtitle: string;
  icon: string;
  trailingIcon: string;
  style: string;
};

export const site = {
  seo: {
    title: 'Tanli.com',
    ogTitle: 'Tanli.com',
    description:
      'I love dragons! I make figurines and jewelry of polymer clay, though I meddle in all types of creative passions.',
    url: 'https://astro.wakri.se',
    image: 'https://astro.wakri.se/avatar-drakkir.jpg',
    siteName: 'Tanli.com',
    locale: 'en_US',
  },

  featuredLink: {
    href: 'https://johndoe.dev/consulting',
    title: '1:1 Consulting',
    subtitle: 'Schedule a personalized session with me',
  },

  profile: {
    avatarSrc: 'https://astro.wakri.se/avatar-drakkir.jpg',
    name: 'Tanli/Drakkir',
    handle: '@tanlidrakkir',
    bio: 'I love dragons! I make figurines and jewelry of polymer clay, though I meddle in all types of creative passions.',
  },

  socialLinks: [
    {
      href: 'https://facebook.com/tanlidrakkir',
      ariaLabel: 'Facebook',
      icon: 'facebook',
    },
    {
      href: 'https://instagram.com/tanlidrakkir',
      ariaLabel: 'Instagram',
      icon: 'instagram',
    },
    {
      href: 'https://www.flickr.com/photos/tanlidesign/',
      ariaLabel: 'flickr',
      icon: 'flickr',
    },
    {
      href: 'https://youtube.com/@TanliDrakkir',
      ariaLabel: 'YouTube',
      icon: 'youtube',
    },
  ] satisfies SiteSocialLink[],

  linkCards: [
    {
      href: 'https://tanli.com.dev/blog',
      title: 'Pre-2012 Portfolio',
      subtitle: 'In swedish',
      icon: '💼',
      trailingIcon: '💼',
      style: 'background-color: rgba(250, 204, 21, 0.125); color: rgb(250, 204, 21);',
    },
  ] satisfies SiteLinkCard[],
} as const;
