import React from 'react';
import NavBar from './nav-bar';
import AvatarSection from './avatar-section';

const HeroSection = () => {
  return (
    <div className='h-max w-full flex-1 flex-col rounded-b-[7rem] border-b border-opacity-10 bg-secondary pb-20'>
      <div className='mx-auto flex max-w-[90%] flex-col space-y-28'>
        <NavBar />
        <div>
          <AvatarSection />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
