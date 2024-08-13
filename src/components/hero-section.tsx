import React from 'react';
import NavBar from './nav-bar';
import AvatarSection from './avatar-section';
import { Card } from './ui/card';

const HeroSection = () => {
  return (
    <Card className='h-max w-full flex-1 flex-col rounded-b-[7rem] border-b border-opacity-10 pb-20'>
      <div className='mx-auto flex w-[90%] max-w-screen-2xl flex-col space-y-28'>
        <NavBar />
        <div className='mx-auto max-w-screen-2xl'>
          <AvatarSection />
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
