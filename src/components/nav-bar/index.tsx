import React from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { AppWindowMac } from 'lucide-react';

const NavigationBar = () => {
  return (
    <div className='bg-slate-00 rounded-2xl border-2 border-slate-300 bg-opacity-10 drop-shadow-lg'>
      <NavigationMenu className='mx-auto flex max-h-max w-full flex-1 items-center justify-center rounded-2xl bg-transparent px-6 py-2 md:flex-col md:px-2 md:py-6'>
        <NavigationMenuList className='xl:gap-30 flex w-full justify-center gap-16 bg-transparent md:flex-col md:justify-center md:gap-12'>
          <NavigationMenuItem className='bg-transparent'>
            <NavigationMenuLink href='/services'>
              <AppWindowMac className='h-8 w-8 text-primary opacity-80' />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='/services'>
              <AppWindowMac className='h-8 w-8 text-primary opacity-80' />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='/services'>
              <AppWindowMac className='h-8 w-8 text-primary opacity-80' />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='/services'>
              <AppWindowMac className='h-8 w-8 text-primary opacity-80' />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='/services'>
              <AppWindowMac className='h-8 w-8 text-primary opacity-80' />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationBar;
