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
import Image from 'next/image';
import { Button } from '../ui/button';

const NavigationBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(() => {
    if (window?.scrollY > 10) {
      setIsSticky(window.scrollY > 10); // Sticky when scrolled down
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

  return (
    <NavigationMenu
      className={cn(
        'duration-600 ml-auto max-h-max w-full max-w-full items-center justify-between p-4 transition-transform ease-in-out',
        isSticky
          ? 'animate-translate-once bg-green bg-transparent bg-opacity-70 py-6 shadow-lg backdrop-blur-md'
          : 'animate-translate-default bg-neutral-100'
      )}
      style={{
        position: isSticky ? 'sticky' : 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transition: 'transform 0.6s ease-in-out',
      }}
    >
      <div className='mx-auto flex w-full max-w-screen-2xl items-center justify-between'>
        <div className=''>
          <Link href='/' className='flex items-center gap-1'>
            <Image
              src='/images/strike-crypto.png'
              alt='Nine Sixteen'
              width={34}
              height={34}
              priority
            />
            <span className={cn('text-xl font-extrabold text-primary')}>
              Murphy Repos
            </span>
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
                      <NavigationMenuContent className='border-1 border-muted-foreground bg-white p-4'>
                        <NavigationMenuList className='bg-white text-white'>
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
                                  <span className='flex items-center justify-center gap-2 bg-primary'>
                                    {subItem.Icon && (
                                      <subItem.Icon className='hidden lg:block' />
                                    )}
                                  </span>
                                  <p>{subItem?.title}</p>
                                </NavigationMenuLink>
                              </Link>
                            </NavigationMenuItem>
                          ))}
                        </NavigationMenuList>
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
  );
};

export default NavigationBar;
