import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const NavBar = () => {
  return (
    <div className='flex w-full items-center justify-between p-8 text-sm'>
      <div className='flex space-x-5'>
        <div className='max-w-content flex h-14 min-h-full items-center justify-between space-x-5 rounded-full border bg-card px-1 py-1 text-xs text-muted-foreground hover:bg-primary hover:text-primary-foreground'>
          <p className='pl-2'>murphyrepos@email.com</p>
          <Button
            variant={'secondary'}
            className='h-full rounded-full px-8 text-xs'
          >
            Copy
          </Button>
        </div>
        <div className='max-w-content flex h-14 min-h-full items-center justify-between space-x-5 rounded-full border bg-card px-1 py-1 text-xs hover:bg-primary'>
          <Button
            variant={'secondary'}
            className='h-full rounded-full px-8 text-xs'
          >
            Copy
          </Button>
        </div>
      </div>
      <div className='max-w-content flex items-center justify-between space-x-2 text-muted-foreground'>
        <a href='#' className='social-links hover:text-primary'>
          LinkedIn
        </a>
        <span className='text-secondary-foreground'>/</span>
        <a href='#' className='social-links hover:text-primary'>
          LinkedIn
        </a>
        <span className='text-secondary-foreground'>/</span>
        <a href='#' className='social-links hover:text-primary'>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default NavBar;
