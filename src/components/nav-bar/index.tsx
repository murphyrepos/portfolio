import React from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { items } from './items';
import { Tooltip, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';

const NavigationBar = () => {
  const router = useRouter();
  const path = router.asPath;
  return (
    <div className='w-full rounded-2xl border-2 border-slate-300 bg-slate-100 bg-opacity-10 px-6 py-2 shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,0.8)] md:px-2 md:py-2'>
      <NavigationMenu className='mx-auto flex max-h-max w-full flex-1 items-center justify-center rounded-2xl px-0 py-0 md:flex-col md:px-0 md:py-6'>
        <NavigationMenuList className='flex w-full gap-6 md:flex-col md:justify-center md:gap-12'>
          {items.map((item, index) => (
            <div key={index}>
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <NavigationMenuItem key={index}>
                      {item.legacyBehavior ? (
                        <Link href={item.href} legacyBehavior>
                          <item.icon
                            className={cn(
                              'h-10 w-10 rounded-md bg-neutral-100 p-2 text-primary shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.8)] ring-2 ring-slate-200 hover:ring-slate-300',
                              path === item.href && 'ring-slate-300'
                            )}
                          />
                        </Link>
                      ) : (
                        <NavigationMenuLink href={item.href}>
                          <item.icon
                            className={cn(
                              'h-10 w-10 rounded-md bg-neutral-100 p-2 text-primary shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.8)] ring-2 ring-slate-200 hover:ring-slate-300',
                              path === item.href && 'ring-slate-300'
                            )}
                          />
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  </TooltipTrigger>
                  <TooltipContent
                    side='bottom'
                    align='center'
                    sideOffset={5}
                    className='block rounded-md bg-white px-2 py-1 font-medium md:hidden'
                  >
                    <p>{item.title}</p>
                  </TooltipContent>
                  <TooltipContent
                    side='right'
                    align='center'
                    sideOffset={5}
                    className='hidden rounded-md bg-white px-2 py-1 font-medium md:block'
                  >
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationBar;
