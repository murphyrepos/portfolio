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
              {/* {items[0].icon} */}
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
                    <NavigationMenuContent className='bg-neutral-100'>
                      <NavigationMenuList className='bg-neutral-100'>
                        {subMenu?.map((subItem, index) => (
                          <NavigationMenuItem
                            key={index}
                            className='bg-neutral-100'
                          >
                            <ListItem
                              href={subItem.href}
                              title={subItem.title}
                            ></ListItem>
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

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<
    typeof Link & {
      className: string;
      title: string;
      children: typeof React.Children;
    }
  >
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink
      asChild
      className={cn(navigationMenuTriggerStyle(), 'bg-neutral-100')}
    >
      <Link
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md bg-neutral-100 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className
        )}
        {...props}
      >
        <div className='bg-neutral-100 text-sm font-medium leading-none'>
          {title}
        </div>
        <p className='line-clamp-2 bg-neutral-100 text-sm leading-snug text-muted-foreground'>
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  );
});
ListItem.displayName = 'ListItem';

export default NavigationBar;
