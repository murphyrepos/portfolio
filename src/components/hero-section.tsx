import React from 'react';
import NavBar from './nav-bar';

const HeroSection = () => {
  return (
    <div className='h-max w-full flex-1 flex-col bg-primary'>
      <div className='mx-auto max-w-[90%]'>
        <NavBar />
      </div>
    </div>
  );
};

export default HeroSection;
