import {
  Contact,
  GalleryVerticalEnd,
  House,
  Laptop,
  LucideProps,
  MonitorSmartphone,
  Smartphone,
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
    icon: (props?: LucideProps) => <MonitorSmartphone {...props} />,
    legacyBehavior: true,
    subMenu: [
      {
        title: 'Web Development',
        href: '/services/web-development',
        icon: (props?: LucideProps) => <Laptop {...props} />,
      },
      {
        title: 'Mobile Development',
        href: '/services/mobile-development',
        icon: (props?: LucideProps) => <Smartphone {...props} />,
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
