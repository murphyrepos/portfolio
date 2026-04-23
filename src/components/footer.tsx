'use client';

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { services } from '@/utils/constants/services.content';
import { Container } from './container';

interface FooterProps {
  invertColors?: boolean;
}

const serviceLinkKeyByTitle: Record<string, string> = {
  'Web Design and Development': 'footer.serviceLinks.webDevelopment',
  'Mobile Development': 'footer.serviceLinks.mobileDevelopment',
  'UI/UX Services': 'footer.serviceLinks.uiUxServices',
  'MVP Design': 'footer.serviceLinks.customSolutions',
  'Digital Marketing': 'footer.serviceLinks.digitalMarketing',
  'Brand Strategy': 'footer.serviceLinks.brandStrategy',
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
      className='scroll-mt-28 bg-gray-900 pt-12 text-slate-400'
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
                <li key={serviceItem.title}>
                  <Link
                    href={serviceItem.url}
                    className='text-base transition-colors hover:text-white'
                  >
                    {serviceLinkKeyByTitle[serviceItem.title]
                      ? t(serviceLinkKeyByTitle[serviceItem.title])
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
            </ul>
          </div>
        </div>
        <div className='mt-12 border-t border-slate-800 py-4 text-center text-base text-slate-400'>
          <p>
            &copy; {copyrightYear} {t('footer.copyright')}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
