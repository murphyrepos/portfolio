import React from 'react';

const NavBar = () => {
  return (
    <div className='flex w-full items-center justify-between p-8 text-sm'>
      <div className='flex space-x-5'>
        <div className='max-w-content flex h-14 min-h-full items-center justify-between space-x-5 rounded-full border bg-primary px-1 py-1 text-xs'>
          <p className='pl-2'>murphyrepos@email.com</p>
          <div className='flex min-h-full w-full flex-1 cursor-pointer items-center justify-center rounded-full bg-secondary px-8 font-semibold'>
            Copy
          </div>
        </div>
        <div className='max-w-content flex h-14 min-h-full items-center justify-between space-x-5 rounded-full border bg-primary px-1 py-1 text-xs'>
          <div className='flex min-h-full w-full flex-1 cursor-pointer items-center justify-center rounded-full bg-secondary px-8 font-semibold'>
            Copy
          </div>
        </div>
      </div>
      <div className='max-w-content flex items-center justify-between space-x-2 text-muted-foreground'>
        <a href='#' className='social-links hover:text-primary-foreground'>
          LinkedIn
        </a>
        <span className='text-primary-foreground'>/</span>
        <a href='#' className='social-links hover:text-primary-foreground'>
          LinkedIn
        </a>
        <span className='text-primary-foreground'>/</span>
        <a href='#' className='social-links hover:text-primary-foreground'>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default NavBar;
