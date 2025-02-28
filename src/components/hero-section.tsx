import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const HeroSection = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center bg-neutral-100 lg:h-screen'>
      <div className='max-w-screen-x mx-auto flex w-[80%] flex-col-reverse items-center justify-between gap-14 py-32 md:gap-5 xl:flex-row xl:w-[80%] xl:max-w-7xl'>
        <div className='xl:7/12 flex w-full flex-col items-center justify-center space-y-6 xl:w-6/12 xl:items-start'>
          <div className='flex w-full flex-col items-center justify-center space-y-6 md:w-[75%]'>
            <h1 className='text-center text-xl sm:text-3xl md:text-5xl xl:text-left'>
              Find a solution that suits your business needs
            </h1>
            <h2 className='text-center text-muted-foreground xl:text-left'>
              Murphy repos is always on toes to provide best services to build
              your next big application
            </h2>
          </div>
          <h3 className='text-center text-sm xl:text-left lg:text-base'>
            <span className='text-muted-foreground'>We are expert in:</span>{' '}
            <span className='text-primary'>
              Web Development, Mobile Development, Custom Software Solutions,
              Cloud Solutions
            </span>
          </h3>
        </div>
        <div className='xl:5/12 flex w-full justify-center xl:w-6/12 xl:justify-start'>
          <DotLottieReact src={'/assets/hero.lottie'} loop autoplay />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
