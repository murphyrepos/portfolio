'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { services } from '@/utils/constants/services.content';
import { Container } from './container';

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
    <footer
      id='footer'
      className='scroll-mt-28 bg-gray-900 py-12 text-slate-400'
    >
      <Container className='max-w-7x mx-auto w-full px-10'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-bold text-slate-100'>
              {t('navbar.brand')}
            </h3>
            <p className='max-w-sm text-slate-400'>{t('footer.description')}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-xl font-semibold text-slate-100'>
              {t('footer.sections.quickLinks')}
            </h4>
            <ul className='space-y-2 text-lg text-slate-400'>
              {quickLinks.map((linkItem) => (
                <li key={linkItem.href}>
                  <Link
                    href={linkItem.href}
                    className='text-base transition-colors hover:text-white'
                  >
                    {linkItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-xl font-semibold text-slate-100'>
              {t('footer.sections.services')}
            </h4>
            <ul className='space-y-2 text-lg text-slate-400'>
              {services.map((serviceItem) => (
                <li key={serviceItem.url}>
                  <Link
                    href={serviceItem.url}
                    className='text-base transition-colors hover:text-white'
                  >
                    {serviceLinkKeyByUrl[serviceItem.url]
                      ? t(serviceLinkKeyByUrl[serviceItem.url])
                      : serviceItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-xl font-semibold text-slate-100'>
              {t('footer.sections.contact')}
            </h4>
            <ul className='space-y-2 text-lg text-slate-400'>
              <li className='flex items-start gap-2'>
                <Mail className='mt-1 h-5 w-5 shrink-0' />
                <span className='text-base'>{t('footer.contact.email')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <Phone className='mt-1 h-5 w-5 shrink-0' />
                <span className='text-base'>{t('footer.contact.phone')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <MapPin className='mt-1 h-5 w-5 shrink-0' />
                <span className='text-base'>{t('footer.contact.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-slate-800 pt-8 text-center text-base text-slate-400'>
          <p>
            &copy; {copyrightYear} {t('footer.copyright')}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
