import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { items } from './items';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Drawer({ open, onOpenChange }: Props) {
  function close() {
    onOpenChange(false);
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild></SheetTrigger>
      <SheetContent side='top'>
        <SheetHeader>
          <SheetTitle>
            <Link
              href='/'
              onClick={close}
              className='flex items-center justify-center gap-0'
            >
              <Image
                src='/logos/2.png'
                alt='Murphy Repos'
                className='h-[40px] w-[40px] object-contain md:h-[50px] md:w-[50px]'
                width={140}
                height={140}
                priority
              />
            </Link>
          </SheetTitle>
          <SheetDescription></SheetDescription>
          <div className='flex flex-col items-center justify-center gap-2 text-base'>
            <NavigationMenu
              className={cn('w-full items-center justify-center')}
            >
              <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between'>
                <div className='flex flex-1 items-center justify-center'>
                  <NavigationMenuList className='flex flex-col items-center justify-center gap-1'>
                    {items.map(({ title, href, subMenu }, index) =>
                      title === 'Services' ? (
                        <NavigationMenu key={index}>
                          <NavigationMenuItem
                            key={index}
                            className='relative hover:bg-transparent focus:bg-transparent'
                          >
                            <>
                              <NavigationMenuTrigger
                                key={index}
                                type='button'
                                className='flex gap-2 text-muted-foreground hover:!bg-transparent hover:text-primary focus:!bg-transparent focus:text-muted-foreground'
                              >
                                <p>{title}</p>
                              </NavigationMenuTrigger>
                              <NavigationMenuContent className='border-1 border-muted-foreground bg-white py-2'>
                                <NavigationMenuList className='flex flex-col bg-white text-white'>
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
                                            'border-1 rounded-none border-muted-foreground text-center text-muted-foreground hover:bg-transparent hover:text-primary'
                                          )}
                                        >
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
                                'flex gap-2 text-muted-foreground hover:bg-transparent hover:text-primary'
                              )}
                            >
                              <p>{title}</p>
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      )
                    )}
                  </NavigationMenuList>
                </div>
              </div>
            </NavigationMenu>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
