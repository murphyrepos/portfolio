import {
  AppWindowMac,
  Contact,
  GalleryVerticalEnd,
  House,
  Workflow,
} from 'lucide-react';
import React from 'react';

interface Items {
  title: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  legacyBehavior?: boolean;
}
export const items: Items[] = [
  {
    title: 'Home',
    href: '/',
    icon: (props) => <House {...props} />,
  },
  {
    title: 'Services',
    href: '/#services',
    icon: (props) => <AppWindowMac {...props} />,
    legacyBehavior: true,
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
    icon: (props) => <GalleryVerticalEnd {...props} />,
  },
  {
    title: 'Workflow',
    href: '/#workflow',
    icon: (props) => <Workflow {...props} />,
    legacyBehavior: true,
  },
  {
    title: 'Contact',
    href: '/#footer',
    icon: (props) => <Contact {...props} />,
    legacyBehavior: true,
  },
];
