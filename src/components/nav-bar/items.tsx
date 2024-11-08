import {
  Component,
  FolderCode,
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
  Icon?: (props?: LucideProps) => JSX.Element;
  legacyBehavior?: boolean;
  subMenu?: Items[];
}
export const items: Items[] = [
  {
    title: 'Home',
    href: '/',
    Icon: (props?: LucideProps) => <House {...props} />,
  },
  {
    title: 'Services',
    href: '/#services',
    Icon: (props?: LucideProps) => <MonitorSmartphone {...props} />,
    legacyBehavior: true,
    subMenu: [
      {
        title: 'Web Development',
        href: '/services/web-development',
        Icon: (props?: LucideProps) => <Laptop {...props} />,
      },
      {
        title: 'Mobile Development',
        href: '/services/mobile-development',
        Icon: (props?: LucideProps) => <Smartphone {...props} />,
      },
      {
        title: 'UI / UX Design',
        href: '/services/ui-ux-services',
        Icon: (props?: LucideProps) => <Component {...props} />,
      },
      {
        title: 'Custom Solutions',
        href: '/services/custom-solutions',
        Icon: (props?: LucideProps) => <FolderCode {...props} />,
      },
    ],
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
    Icon: (props?: LucideProps) => <GalleryVerticalEnd {...props} />,
  },
  {
    title: 'Workflow',
    href: '/#workflow',
    Icon: (props?: LucideProps) => <Workflow {...props} />,
    legacyBehavior: true,
  },
];
