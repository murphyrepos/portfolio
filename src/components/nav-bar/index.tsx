'use client';
import React, { useCallback, useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { items } from './items';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { NavBarItem, SubMenuComponent } from './nav-bar-component';
import DrawerToggle from './drawer-toggle';

const NavigationBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleScroll = useCallback(() => {
    if (window?.scrollY > 0) {
      setIsSticky(window.scrollY > 800);
    } else {
      setIsSticky(false);
    }
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (window) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <>
      <NavigationMenu
        className={cn(
          'ml-auto hidden max-h-max w-full min-w-full items-center justify-between p-4 transition-transform duration-700 ease-in-out md:block',
          isSticky
            ? 'animate-translate-once fixed bg-background bg-opacity-70 py-3 shadow-lg backdrop-blur-md'
            : 'animate-translate-default bg-background py-3'
        )}
      >
        <div className='mx-auto flex max-w-screen-xl items-center justify-between px-6 py-2'>
          <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between'>
            <div className=''>
              <Link href='/' className='flex items-center gap-1'>
                <Image
                  src='/logos/2.png'
                  alt='Murphy Repos'
                  className='md:h-42 h-[40px] w-[40px] object-contain md:w-[50px]'
                  width={140}
                  height={140}
                  priority
                />
              </Link>
            </div>
            <div className='flex flex-1 items-center justify-end'>
              <NavigationMenuList className='flex gap-2'>
                {items.map(({ title, href, children }, index) =>
                  !!children?.length ? (
                    <NavigationMenu className='flex gap-2' key={index}>
                      <SubMenuComponent items={children} title={title} />
                    </NavigationMenu>
                  ) : (
                    <NavigationMenuItem key={index}>
                      <NavBarItem item={{ title, href }} />
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </div>
          </div>
        </div>
      </NavigationMenu>
      <DrawerToggle isSticky={isSticky} open={open} setOpen={setOpen} />
    </>
  );
};

export default NavigationBar;
