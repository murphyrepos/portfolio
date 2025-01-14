import React from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Drawer } from './drawer';
import Icons from '../icons';

interface DrawerToggleProps {
  isSticky: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DrawerToggle = ({ isSticky, open, setOpen }: DrawerToggleProps) => {
  return (
    <div
      className={cn(
        'z-10 ml-auto flex max-h-max w-full max-w-full items-center justify-between transition-transform duration-700 ease-in md:hidden',
        isSticky
          ? 'animate-translate-once fixed bg-background bg-opacity-70 py-3 shadow-lg backdrop-blur-md'
          : 'animate-translate-default bg-background py-3'
      )}
    >
      <Link
        href='/'
        className='flex flex-1 items-center gap-2 px-4 text-muted-foreground transition-all delay-150 hover:text-primary'
      >
        <Icons.logo className='h-14 w-14' />
        <p>Murphy Repos</p>
      </Link>
      <Drawer open={open} onOpenChange={setOpen} />
      <div className='flex items-center gap-2'>
        <Button
          asChild
          variant='outline'
          size={'sm'}
          className='rounded-full border-muted-foreground bg-background !px-4 text-xs text-muted-foreground shadow-none'
        >
          <Link href='/#footer'>Contact Us</Link>
        </Button>
        <Button
          onClick={() => setOpen(true)}
          size='icon'
          variant='ghost'
          className='mr-5 rounded-full border-muted-foreground bg-background text-sm text-muted-foreground shadow-none'
        >
          {!open ? (
            <Menu className='!h-5 !w-5 transition-all delay-300 ease-in-out' />
          ) : (
            <X className='!h-5 !w-5 transition-all delay-300 ease-in-out' />
          )}
        </Button>
      </div>
    </div>
  );
};

export default DrawerToggle;
