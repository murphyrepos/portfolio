'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { services } from '@/utils/constants/services.content';

interface FooterProps {
  invertColors?: boolean;
}

const serviceLinkKeyByUrl: Record<string, string> = {
  '/services/web-development': 'footer.serviceLinks.webDevelopment',
  '/services/mobile-development': 'footer.serviceLinks.mobileDevelopment',
  '/services/ui-ux-services': 'footer.serviceLinks.uiUxServices',
  '/services/custom-solutions': 'footer.serviceLinks.customSolutions',
};

const Footer = ({ invertColors: _invertColors }: FooterProps) => {
  const { t } = useTranslation('common');

  const quickLinks = [
    { href: '/', label: t('footer.quickLinks.home') },
    { href: '/services', label: t('footer.quickLinks.services') },
    { href: '/workflow', label: t('footer.quickLinks.workflow') },
    { href: '/about', label: t('footer.quickLinks.about') },
  ];

  const copyrightYear = new Date().getFullYear();

  return (
    <footer id='footer' className='scroll-mt-28 bg-[#081531] py-16 text-white'>
      <div id='contact' className='scroll-mt-28' />

      <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h3 className='text-4xl font-bold'>{t('navbar.brand')}</h3>
            <p className='mt-4 max-w-sm text-xl text-slate-300'>
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className='text-3xl font-semibold'>
              {t('footer.sections.quickLinks')}
            </h4>
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
            <h4 className='text-3xl font-semibold'>{t('footer.sections.services')}</h4>
            <ul className='mt-4 space-y-3 text-xl text-slate-300'>
              {services.map((serviceItem) => (
                <li key={serviceItem.url}>
                  <Link
                    href={serviceItem.url}
                    className='transition-colors hover:text-white'
                  >
                    {serviceLinkKeyByUrl[serviceItem.url]
                      ? t(serviceLinkKeyByUrl[serviceItem.url])
                      : serviceItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-3xl font-semibold'>{t('footer.sections.contact')}</h4>
            <ul className='mt-4 space-y-4 text-xl text-slate-300'>
              <li className='flex items-start gap-3'>
                <Mail className='mt-1 h-6 w-6 shrink-0' />
                <span>{t('footer.contact.email')}</span>
              </li>
              <li className='flex items-start gap-3'>
                <Phone className='mt-1 h-6 w-6 shrink-0' />
                <span>{t('footer.contact.phone')}</span>
              </li>
              <li className='flex items-start gap-3'>
                <MapPin className='mt-1 h-6 w-6 shrink-0' />
                <span>{t('footer.contact.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-slate-700 pt-8 text-center text-lg text-slate-300'>
          <p>
            &copy; {copyrightYear} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
