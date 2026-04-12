import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { services } from '@/utils/constants/services.content';

interface FooterProps {
  invertColors?: boolean;
}

const COPYRIGHT_YEAR = 2026;

const Footer = ({ invertColors: _invertColors }: FooterProps) => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/workflow', label: 'Workflow' },
    { href: '/about', label: 'About' },
  ];

  return (
    <footer id='footer' className='scroll-mt-28 bg-[#081531] py-16 text-white'>
      <div id='contact' className='scroll-mt-28' />

      <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h3 className='text-4xl font-bold'>Murphy Repos</h3>
            <p className='mt-4 max-w-sm text-xl text-slate-300'>
              Creative solutions for modern businesses
            </p>
          </div>

          <div>
            <h4 className='text-3xl font-semibold'>Quick Links</h4>
            <ul className='mt-4 space-y-3 text-xl text-slate-300'>
              {quickLinks.map((linkItem) => (
                <li key={linkItem.href}>
                  <Link
                    href={linkItem.href}
                    className='transition-colors hover:text-white'
                  >
                    {linkItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-3xl font-semibold'>Services</h4>
            <ul className='mt-4 space-y-3 text-xl text-slate-300'>
              {services.map((serviceItem) => (
                <li key={serviceItem.url}>
                  <Link
                    href={serviceItem.url}
                    className='transition-colors hover:text-white'
                  >
                    {serviceItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-3xl font-semibold'>Contact</h4>
            <ul className='mt-4 space-y-4 text-xl text-slate-300'>
              <li className='flex items-start gap-3'>
                <Mail className='mt-1 h-6 w-6 shrink-0' />
                <span>contact@murphyrepos.com</span>
              </li>
              <li className='flex items-start gap-3'>
                <Phone className='mt-1 h-6 w-6 shrink-0' />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className='flex items-start gap-3'>
                <MapPin className='mt-1 h-6 w-6 shrink-0' />
                <span>123 Creative Street, Design City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-slate-700 pt-8 text-center text-lg text-slate-300'>
          <p>&copy; {COPYRIGHT_YEAR} Murphy Repos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
