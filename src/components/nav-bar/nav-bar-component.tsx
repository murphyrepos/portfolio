import { cn } from '@/lib/utils';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';
import {
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { type Item } from './items';
import { ChevronUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

interface INavBarSubComponent {
  title: string;
  items: Item[];
  href?: string;
}
export const SubMenuComponent = ({ items, title }: INavBarSubComponent) => {
  return (
    <NavigationMenuItem className='text-muted-foreground'>
      <NavigationMenuTrigger
        className={cn(
          navigationMenuTriggerStyle({
            hoverEffect: false,
          }),
          'flex gap-2 text-sm text-muted-foreground hover:text-primary'
        )}
      >
        <p>{title}</p>
      </NavigationMenuTrigger>
      <NavigationMenuContent className='min-w-max p-2 drop-shadow-2xl'>
        <NavigationMenuList className='border-0 border-none text-primary'>
          <div className='flex flex-col gap-2'>
            {items?.map((child, index) => (
              <NavigationMenuItem key={index} className='text-muted-foreground'>
                <Link
                  href={child.href}
                  legacyBehavior
                  passHref
                  className='flex w-full'
                >
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle({
                        hoverEffect: false,
                      }),
                      'flex w-full gap-2'
                    )}
                    asChild
                  >
                    <p>{child.title}</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </div>
        </NavigationMenuList>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

interface INavBarSubMobileComponent {
  title: string;
  items: Item[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubMenuMobileComponent = ({
  title,
  items,
  isOpen,
  setIsOpen,
}: INavBarSubMobileComponent) => {
  return (
    <NavigationMenuItem className='text-muted-foreground'>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className='flex w-full flex-col gap-2'
      >
        <CollapsibleTrigger className='flex w-full gap-2'>
          <Button
            variant='ghost'
            className='flex w-full items-center justify-center gap-2'
          >
            <p>{title}</p>
            <div
              className={cn(
                'transform transition-transform duration-700 ease-in-out',
                isOpen ? 'rotate-180' : 'rotate-0'
              )}
            >
              <ChevronUp className='h-4 w-4' />
            </div>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className='space-y-2'>
          <NavigationMenuList className='border-0 border-none text-primary'>
            <div className='flex flex-col gap-2'>
              {items?.map((child, index) => (
                <NavigationMenuItem
                  key={index}
                  className='cursor-pointer text-muted-foreground'
                >
                  <Link
                    href={child.href}
                    legacyBehavior
                    passHref
                    className='flex w-full'
                  >
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle({
                          hoverEffect: false,
                        }),
                        'flex w-full gap-2'
                      )}
                      asChild
                    >
                      <p>{child.title}</p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </div>
          </NavigationMenuList>
        </CollapsibleContent>
      </Collapsible>
    </NavigationMenuItem>
  );
};

export const NavBarItem = ({ item }: { item: Item }) => {
  return (
    <Link href={item.href} legacyBehavior passHref>
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle({
            hoverEffect: false,
          }),
          'flex gap-2 text-sm text-muted-foreground hover:text-primary'
        )}
      >
        <p>{item.title}</p>
      </NavigationMenuLink>
    </Link>
  );
};
