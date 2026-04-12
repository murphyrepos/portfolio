'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/workflow', label: 'Workflow' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/#contact', label: 'Contact' },
];

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const router = useRouter();

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

  const isActive = (href: string) => {
    if (href === '/') {
      return router.pathname === '/' && currentHash === '';
    }

    if (href === '/services') {
      return router.pathname === '/services' || router.pathname === '/services/[service]';
    }

    if (href === '/workflow') {
      return router.pathname === '/workflow';
    }

    if (href === '/about') {
      return router.pathname === '/about';
    }

    if (href === '/reviews') {
      return router.pathname === '/reviews';
    }

    if (href.startsWith('/#')) {
      return router.pathname === '/' && currentHash === href.slice(1);
    }

    return router.pathname === href;
  };

  return (
    <header className='fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur'>
      <nav className='mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between px-6 lg:px-8'>
        <Link
          href='/'
          className='text-2xl font-bold tracking-tight text-slate-900'
          onClick={() => setMobileMenuOpen(false)}
        >
          Murphy Repos
        </Link>

        <ul className='hidden items-center gap-8 text-lg text-slate-600 lg:flex'>
          {navLinks.map((item) => (
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

        <button
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-900 transition-colors hover:bg-slate-100 lg:hidden'
          onClick={() => setMobileMenuOpen((currentState) => !currentState)}
          aria-label='Toggle navigation menu'
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className='border-t border-slate-200 bg-white lg:hidden'>
          <ul className='mx-auto flex w-full max-w-[1240px] flex-col px-6 py-4'>
            {navLinks.map((item) => (
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
