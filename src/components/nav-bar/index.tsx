'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { supportedLngs } from '@/i18n/settings';

const navLinks = [
  { href: '/', labelKey: 'navbar.links.home' },
  { href: '/services', labelKey: 'navbar.links.services' },
  { href: '/workflow', labelKey: 'navbar.links.workflow' },
  { href: '/about', labelKey: 'navbar.links.about' },
  { href: '/reviews', labelKey: 'navbar.links.reviews' },
  { href: '/#contact', labelKey: 'navbar.links.contact' },
] as const;

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const pathname = usePathname();
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    const syncHash = () => {
      setCurrentHash(window.location.hash);
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);

    return () => {
      window.removeEventListener('hashchange', syncHash);
    };
  }, []);

  const translatedNavLinks = useMemo(
    () =>
      navLinks.map((item) => ({
        ...item,
        label: t(item.labelKey),
      })),
    [t]
  );

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' && currentHash === '';
    }

    if (href === '/services') {
      return pathname === '/services' || pathname.startsWith('/services/');
    }

    if (href === '/workflow') {
      return pathname === '/workflow';
    }

    if (href === '/about') {
      return pathname === '/about';
    }

    if (href === '/reviews') {
      return pathname === '/reviews';
    }

    if (href.startsWith('/#')) {
      return pathname === '/' && currentHash === href.slice(1);
    }

    return pathname === href;
  };

  const normalizedLanguage = (i18n.resolvedLanguage ?? i18n.language ?? 'en').split(
    '-'
  )[0];

  const currentLanguage = supportedLngs.includes(
    normalizedLanguage as (typeof supportedLngs)[number]
  )
    ? normalizedLanguage
    : 'en';

  const handleLanguageChange = (language: string) => {
    void i18n.changeLanguage(language);
  };

  return (
    <header className='fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur'>
      <nav className='mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between gap-4 px-6 lg:px-8'>
        <Link
          href='/'
          className='text-2xl font-bold tracking-tight text-slate-900'
          onClick={() => setMobileMenuOpen(false)}
        >
          {t('navbar.brand')}
        </Link>

        <ul className='hidden items-center gap-8 text-lg text-slate-600 lg:flex'>
          {translatedNavLinks.map((item) => (
            <li key={item.href} className='relative'>
              <Link
                href={item.href}
                className={cn(
                  'transition-colors hover:text-slate-900',
                  isActive(item.href) && 'text-slate-900'
                )}
              >
                {item.label}
              </Link>
              {isActive(item.href) && (
                <span className='absolute -bottom-[2.1rem] left-0 h-0.5 w-full rounded-full bg-primary' />
              )}
            </li>
          ))}
        </ul>

        <div className='hidden lg:block'>
          <label htmlFor='language-switcher' className='sr-only'>
            {t('navbar.languageLabel')}
          </label>
          <select
            id='language-switcher'
            value={currentLanguage}
            onChange={(event) => handleLanguageChange(event.target.value)}
            className='rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition-colors focus:border-primary'
            aria-label={t('navbar.languageLabel')}
          >
            {supportedLngs.map((language) => (
              <option key={language} value={language}>
                {t(`languages.${language}`)}
              </option>
            ))}
          </select>
        </div>

        <button
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-900 transition-colors hover:bg-slate-100 lg:hidden'
          onClick={() => setMobileMenuOpen((currentState) => !currentState)}
          aria-label={t('navbar.toggleMenu')}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className='border-t border-slate-200 bg-white lg:hidden'>
          <div className='mx-auto flex w-full max-w-[1240px] items-center justify-end px-6 pt-4'>
            <label htmlFor='language-switcher-mobile' className='sr-only'>
              {t('navbar.languageLabel')}
            </label>
            <select
              id='language-switcher-mobile'
              value={currentLanguage}
              onChange={(event) => handleLanguageChange(event.target.value)}
              className='rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition-colors focus:border-primary'
              aria-label={t('navbar.languageLabel')}
            >
              {supportedLngs.map((language) => (
                <option key={language} value={language}>
                  {t(`languages.${language}`)}
                </option>
              ))}
            </select>
          </div>
          <ul className='mx-auto flex w-full max-w-[1240px] flex-col px-6 py-4'>
            {translatedNavLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block py-3 text-base text-slate-600 transition-colors hover:text-slate-900',
                    isActive(item.href) && 'font-semibold text-slate-900'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
