import React from 'react';
import Icons from './icons';

const HeroSection = () => {
  return (
    <div
      className='flex h-screen w-full flex-col items-center justify-center bg-neutral-100 py-14'
      data-scroll-section
    >
      <div
        className='max-w-screen-x mx-auto flex w-[80%] flex-col-reverse items-center justify-between md:space-x-5 lg:flex-row'
        data-scroll
      >
        <div className='flex w-full flex-col items-start justify-center space-y-6 lg:w-3/5'>
          <div className='flex w-full flex-col items-start justify-center space-y-6 md:w-[75%]'>
            <p className='text-3xl md:text-5xl' data-scroll>
              Find a solution that suits your business needs
            </p>
            <p className='text-muted-foreground' data-scroll>
              Murphy repos is always on toes to provide best services to build
              your next big application
            </p>
          </div>
          <p className='text-sm' data-scroll>
            <span className='text-muted-foreground'>We are expert in:</span>{' '}
            <span className='text-primary'>
              Web Development, Mobile Development, Custom Software Solutions,
              Cloud Solutions
            </span>
          </p>
        </div>
        <div className='flex w-full justify-end lg:w-2/5' data-scroll>
          <Icons.illustration />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
