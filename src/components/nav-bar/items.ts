export interface Item {
  title: string;
  href: string;
  legacyBehavior?: boolean;
  children?: Item[];
}

export const items: Item[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '/#services',
    legacyBehavior: true,
    children: [
      {
        title: 'Web Development',
        href: '/services/web-development',
      },
      {
        title: 'Mobile Development',
        href: '/services/mobile-development',
      },
      {
        title: 'UI / UX Design',
        href: '/services/ui-ux-services',
      },
      {
        title: 'Custom Solutions',
        href: '/services/custom-solutions',
      },
    ],
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
  },
  {
    title: 'Workflow',
    href: '/#workflow',
    legacyBehavior: true,
  },
];
