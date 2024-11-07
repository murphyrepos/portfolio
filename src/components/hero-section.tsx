import React from 'react';
import Icons from './icons';

const HeroSection = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-neutral-100 py-14'>
      <div className='max-w-screen-x mx-auto flex w-[80%] max-w-7xl flex-col-reverse items-center justify-between md:space-x-5 lg:flex-row'>
        <div className='flex w-full flex-col items-start justify-center space-y-6 lg:w-3/5'>
          <div className='flex w-full flex-col items-start justify-center space-y-6 md:w-[75%]'>
            <p className='text-xl md:text-5xl'>
              Find a solution that suits your business needs
            </p>
            <p className='text-muted-foreground'>
              Murphy repos is always on toes to provide best services to build
              your next big application
            </p>
          </div>
          <p className='text-sm lg:text-base'>
            <span className='text-muted-foreground'>We are expert in:</span>{' '}
            <span className='text-primary'>
              Web Development, Mobile Development, Custom Software Solutions,
              Cloud Solutions
            </span>
          </p>
          {/* <Button
            className='x-10 rounded-full py-6 text-xl transition-all duration-500 hover:bg-white hover:text-primary hover:ring-2'
            variant={'default'}
          >
            <Link href='/profile'>Profile</Link>
          </Button> */}
        </div>
        <div className='flex w-full justify-end lg:w-2/5'>
          <Icons.illustration />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
