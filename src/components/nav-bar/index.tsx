'use client';
import React, { useCallback, useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { items } from './items';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Drawer } from './drawer';

const NavigationBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleScroll = useCallback(() => {
    if (window?.scrollY > 0) {
      setIsSticky(window.scrollY > 0); // Sticky when scrolled down
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
          'duration-600 ml-auto hidden max-h-max w-full max-w-full items-center justify-between p-4 transition-transform ease-in-out md:block',
          isSticky
            ? 'animate-translate-once bg-green bg-transparent bg-opacity-70 shadow-lg backdrop-blur-md'
            : 'animate-translate-default bg-neutral-100'
        )}
        style={{
          position: isSticky ? 'fixed' : 'absolute',
          top: 0,
          left: 0,
          right: 0,
          transition: 'transform 0.6s ease-in-out',
        }}
      >
        <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between'>
          <div className=''>
            <Link href='/' className='flex items-center gap-1'>
              <Image
                src='/logos/white.png'
                alt='Murphy Repos'
                className='h-auto w-[40px] object-contain md:w-[150px]'
                width={500}
                height={250}
                priority
              />
            </Link>
          </div>
          <div className='flex flex-1 items-center justify-center'>
            <NavigationMenuList className='flex gap-2'>
              {items.map(({ title, Icon, href, subMenu }, index) =>
                title === 'Services' ? (
                  // It may look a crazy hierarchy to use Nested Navigation Menu but this is a patch for an existing issue in ShadCn Menu https://github.com/shadcn-ui/ui/issues/418
                  <NavigationMenu key={index}>
                    <NavigationMenuItem key={index} className='relative'>
                      <>
                        <NavigationMenuTrigger
                          key={index}
                          className='flex gap-2 bg-neutral-100 text-muted-foreground hover:text-primary'
                        >
                          <span className='flex items-center justify-center gap-2 bg-neutral-100'>
                            {Icon && <Icon className='hidden lg:block' />}
                          </span>
                          <p>{title}</p>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className='border-1 min-w-max border-muted-foreground bg-white p-4'>
                          <ul>
                            <NavigationMenuList
                              className='bg-white text-white'
                              asChild
                            >
                              <div className='grid grid-cols-2 gap-4'>
                                {subMenu?.map((subItem, index) => (
                                  <NavigationMenuItem
                                    key={index}
                                    className='text-muted-foreground'
                                  >
                                    <Link
                                      href={subItem?.href}
                                      legacyBehavior
                                      passHref
                                    >
                                      <NavigationMenuLink
                                        className={cn(
                                          navigationMenuTriggerStyle(),
                                          'border-1 flex gap-2 border-muted-foreground'
                                        )}
                                      >
                                        <span className='flex items-center justify-center gap-2'>
                                          {subItem.Icon && (
                                            <subItem.Icon className='hidden lg:block' />
                                          )}
                                        </span>
                                        <p>{subItem?.title}</p>
                                      </NavigationMenuLink>
                                    </Link>
                                  </NavigationMenuItem>
                                ))}
                              </div>
                            </NavigationMenuList>
                          </ul>
                        </NavigationMenuContent>
                      </>
                    </NavigationMenuItem>
                  </NavigationMenu>
                ) : (
                  <NavigationMenuItem key={index}>
                    <Link href={href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'flex gap-2 bg-neutral-100 text-muted-foreground hover:text-primary'
                        )}
                      >
                        <span className='flex items-center justify-center gap-2 bg-neutral-100'>
                          {Icon && <Icon className='hidden lg:block' />}
                        </span>
                        <p>{title}</p>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </div>
          <Button
            asChild
            variant='outline'
            className='rounded-full bg-neutral-100 text-muted-foreground shadow-none hover:bg-white hover:text-primary'
          >
            <Link href='/#footer'>Contact Us</Link>
          </Button>
        </div>
      </NavigationMenu>
      <div
        className={cn(
          'duration-600 z-10 ml-auto flex max-h-max w-full max-w-full items-center justify-between transition-transform ease-in-out md:hidden',
          isSticky
            ? 'animate-translate-once bg-green bg-transparent bg-opacity-70 py-3 shadow-lg backdrop-blur-md'
            : 'animate-translate-default bg-neutral-100 py-3'
        )}
        style={{
          position: isSticky ? 'fixed' : 'absolute',
          top: 0,
          left: 0,
          right: 0,
          transition: 'transform 0.6s ease-in-out',
        }}
      >
        <Link href='/' className='ml-5 flex items-center gap-1'>
          <Image
            src='/logos/small_white.png'
            alt='Murphy Repos'
            className='h-auto w-[80px] object-contain md:w-[50px]'
            width={140}
            height={140}
            priority
          />
        </Link>
        <div className='h-10 w-10'></div>
        <Drawer open={open} onOpenChange={setOpen} />
        <div className='flex items-center gap-2'>
          <Button
            asChild
            variant='outline'
            size={'sm'}
            className='rounded-full bg-neutral-100 text-sm text-muted-foreground shadow-none hover:bg-white hover:text-primary'
          >
            <Link href='/#footer'>Contact Us</Link>
          </Button>
          <Button
            onClick={() => setOpen(true)}
            size='icon'
            variant='ghost'
            className='mr-5 text-primary hover:text-primary/80'
          >
            <Menu className='!h-5 !w-5' />
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
