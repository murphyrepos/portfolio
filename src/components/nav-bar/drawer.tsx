import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { items } from './items';
import { NavBarItem, SubMenuMobileComponent } from './nav-bar-component';
import { useState } from 'react';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Drawer({ open, onOpenChange }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild></SheetTrigger>
      <SheetContent side='top' className='top-14 md:hidden' hideOverLayer>
        <SheetHeader className='sr-only'>
          <SheetDescription className='sr-only'></SheetDescription>
        </SheetHeader>
        <div className='flex flex-col items-center justify-center gap-2 text-base'>
          <NavigationMenu className={cn('w-full items-center justify-center')}>
            <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between'>
              <div className='flex flex-1 items-center justify-center'>
                <NavigationMenuList className='flex flex-col items-center justify-center gap-1'>
                  {items.map(({ title, href, children }, index) =>
                    !!children?.length ? (
                      <NavigationMenu className='flex gap-2' key={index}>
                        <SubMenuMobileComponent
                          title={title}
                          isOpen={isCollapsed}
                          items={children}
                          setIsOpen={setIsCollapsed}
                        />
                      </NavigationMenu>
                    ) : (
                      <NavigationMenuItem
                        key={index}
                        className={isCollapsed ? 'hidden' : 'block'}
                      >
                        <NavBarItem item={{ title, href }} />
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </div>
            </div>
          </NavigationMenu>
        </div>
      </SheetContent>
    </Sheet>
  );
}
