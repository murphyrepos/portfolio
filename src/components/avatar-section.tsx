import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

const AvatarSection = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center space-y-7'>
      <Avatar className='h-32 w-32 rounded-full bg-secondary p-1'>
        <AvatarImage
          src='https://github.com/shadcn.png'
          className='rounded-full'
        />
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
      <p className='mx-auto w-[50%] text-center text-6xl font-medium text-muted-foreground'>
        Building digital products, brands, and experience.
      </p>
      <Button className='rounded-full px-12 py-7'>Latest Shots</Button>
    </div>
  );
};

export default AvatarSection;
