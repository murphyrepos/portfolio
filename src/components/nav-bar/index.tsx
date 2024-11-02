'use Client';
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

const NavigationBar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollCallback = useCallback(() => {
    if (window?.scrollY > 50) {
      console.log('setting state');
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', scrollCallback);
    }
    return () => {
      if (window) {
        window.removeEventListener('scroll', scrollCallback);
      }
    };
  }, [scrollCallback]);

  return (
    <NavigationMenu
      className={cn(
        'ml-auto flex max-h-max w-full max-w-full flex-1 items-center justify-between border-2 border-neutral-100 bg-neutral-100 p-4 backdrop-blur-md',
        isVisible ? 'fixed top-0 shadow-md shadow-neutral-100' : ''
      )}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href={items[0]?.href}
            title={items[0].title}
            className={cn(navigationMenuTriggerStyle(), 'bg-neutral-100')}
          >
            <span className='flex items-center justify-start gap-2'>
              {items[0]?.icon?.()}
              {items[0].title}
            </span>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className='justify-between'>
        {items
          .filter(({ title }) => title !== 'Home')
          .map(({ title, icon, href, subMenu }, index) =>
            title === 'Services' ? (
              // It may look a crazy hierarchy to use Nested Navigation Menu but this is a patch for an existing issue in ShadCn Menu https://github.com/shadcn-ui/ui/issues/418
              <NavigationMenu key={index}>
                <NavigationMenuItem key={index} className='relative'>
                  <>
                    <NavigationMenuTrigger
                      key={index}
                      className='bg-neutral-100'
                    >
                      <span className='flex items-center justify-center gap-2 bg-neutral-100'>
                        {icon?.()}
                        {title}
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className='bg-neutral-100 p-4'>
                      <NavigationMenuList className='bg-neutral-100'>
                        {subMenu?.map((subItem, index) => (
                          <NavigationMenuItem
                            key={index}
                            className='bg-neutral-100'
                          >
                            <Link href={subItem?.href} legacyBehavior passHref>
                              <NavigationMenuLink
                                className={cn(
                                  navigationMenuTriggerStyle(),
                                  'bg-neutral-100'
                                )}
                              >
                                <span className='flex items-center justify-center gap-2 bg-neutral-100'>
                                  {subItem?.icon?.()}
                                  {subItem?.title}
                                </span>
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
                      'bg-neutral-100'
                    )}
                  >
                    <span className='flex items-center justify-center gap-2 bg-neutral-100'>
                      {icon?.()}
                      {title}
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
