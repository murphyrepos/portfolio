import {
  AppWindowMac,
  Contact,
  GalleryVerticalEnd,
  House,
  LucideProps,
  Workflow,
} from 'lucide-react';
import React from 'react';

interface Items {
  title: string;
  href: string;
  icon?: (props?: LucideProps) => JSX.Element;
  legacyBehavior?: boolean;
  subMenu?: Items[];
}
export const items: Items[] = [
  {
    title: 'Home',
    href: '/',
    icon: (props?: LucideProps) => <House {...props} />,
  },
  {
    title: 'Services',
    href: '/#services',
    icon: (props?: LucideProps) => <AppWindowMac {...props} />,
    legacyBehavior: true,
    subMenu: [
      {
        title: 'Web Development',
        href: '/services/web-development',
      },
      {
        title: 'Mobile Development',
        href: '/services/mobile-development',
      },
    ],
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
    icon: (props?: LucideProps) => <GalleryVerticalEnd {...props} />,
  },
  {
    title: 'Workflow',
    href: '/#workflow',
    icon: (props?: LucideProps) => <Workflow {...props} />,
    legacyBehavior: true,
  },
  {
    title: 'Contact',
    href: '/#footer',
    icon: (props?: LucideProps) => <Contact {...props} />,
    legacyBehavior: true,
  },
];
