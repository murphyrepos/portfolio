'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '/home', labelKey: 'navbar.links.home' },
  { href: '/services', labelKey: 'navbar.links.services' },
  { href: '/workflow', labelKey: 'navbar.links.workflow' },
  { href: '/about', labelKey: 'navbar.links.about' },
  { href: '/reviews', labelKey: 'navbar.links.reviews' },
  { href: '/contact', labelKey: 'navbar.links.contact' },
] as const;

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const pathname = usePathname();
  const { t } = useTranslation('common');

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
    if (href.includes('#')) {
      const [targetPath, targetHash] = href.split('#');
      return pathname === targetPath && currentHash === `#${targetHash}`;
    }

    if (href === '/home') {
      return (pathname === '/home' || pathname === '/') && currentHash === '';
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

    return pathname === href;
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, currentHash]);

  return (
    <header className='fixed top-0 right-0 left-0 z-50 border-b border-blue-100/40 bg-white/80 backdrop-blur-sm supports-[backdrop-filter]:bg-white/65'>
      <nav className='mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between gap-4 px-6 lg:px-8'>
        <Link href='/home' onClick={() => setMobileMenuOpen(false)}>
          <Image
            src='/logos/white.png'
            alt={t('navbar.brand')}
            width={180}
            height={48}
            className='mx-auto h-12 w-auto object-contain'
            priority
          />
        </Link>

        <NavigationMenu className='hidden lg:flex'>
          <NavigationMenuList className='gap-6 text-base text-slate-600'>
            {translatedNavLinks.map((item) => (
              <NavigationMenuItem key={item.href} className='relative'>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      'inline-flex h-10 items-center transition-colors hover:text-slate-900',
                      isActive(item.href) && 'text-slate-900'
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
                {isActive(item.href) && (
                  <motion.div
                    layoutId='activeNav'
                    className='bg-primary-500 absolute right-0 -bottom-[0.6rem] left-0 h-0.5 rounded-full'
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              type='button'
              variant='ghost'
              size='icon'
              className='text-slate-900 hover:bg-slate-100 lg:hidden'
              aria-label={t('navbar.toggleMenu')}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side='top'
            className='mx-4 mt-3 rounded-2xl border border-blue-100/60 bg-white p-0 shadow-xl sm:mx-8 lg:hidden'
          >
            <SheetHeader className='border-b border-slate-200/80 px-10 py-8'>
              <SheetTitle className='sr-only'>{t('navbar.brand')}</SheetTitle>
              <Link href='/home' onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src='/logos/white.png'
                  alt={t('navbar.brand')}
                  width={180}
                  height={48}
                  className='mx-auto h-12 w-auto object-contain'
                  priority
                />
              </Link>
            </SheetHeader>

            <div className='mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-10 py-8'>
              {translatedNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block w-full rounded-md px-3 py-3 text-center text-xl text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900',
                    isActive(item.href) && 'text-primary-500 font-medium'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default NavigationBar;
