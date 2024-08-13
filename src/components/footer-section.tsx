import React from 'react';
import { Button } from './ui/button';

const FooterSection = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center space-y-20 rounded-t-[6rem] bg-secondary py-24'>
      <div className='mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center space-y-20'>
        <p className='mx-auto w-[40%] text-center text-4xl font-medium text-muted-foreground'>
          Collaborate with brands and agencies to create impactful results.
        </p>
        <div className='flex w-full items-center justify-center space-x-4'>
          <div className='max-w-content flex h-14 min-h-full items-center justify-between space-x-5 rounded-full border bg-card px-1 py-1 text-xs'>
            <Button
              variant={'ghost'}
              className='h-full rounded-full px-8 text-xs'
            >
              Email Me
            </Button>
          </div>
          <div className='max-w-content flex h-14 min-h-full items-center justify-between space-x-5 rounded-full border bg-card px-1 py-1 text-xs'>
            <Button className='h-full rounded-full px-8 text-xs'>
              WhatsApp
            </Button>
          </div>
        </div>
        <div className='flex w-full items-center justify-center'>
          <hr className='w-[90%] border border-primary-foreground' />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
