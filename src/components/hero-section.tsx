import React from 'react';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center bg-neutral-100 lg:h-screen'>
      <div className='max-w-screen-x mx-auto flex w-[80%] max-w-7xl flex-col-reverse items-center justify-between py-32 md:space-x-5 lg:flex-row'>
        <div className='flex w-full flex-col items-center justify-center space-y-6 lg:w-3/5 lg:items-start'>
          <div className='flex w-full flex-col items-center justify-center space-y-6 md:w-[75%]'>
            <p className='text-center text-xl md:text-5xl lg:text-left'>
              Find a solution that suits your business needs
            </p>
            <p className='text-center text-muted-foreground lg:text-left'>
              Murphy repos is always on toes to provide best services to build
              your next big application
            </p>
          </div>
          <p className='text-center text-sm lg:text-left lg:text-base'>
            <span className='text-muted-foreground'>We are expert in:</span>{' '}
            <span className='text-primary'>
              Web Development, Mobile Development, Custom Software Solutions,
              Cloud Solutions
            </span>
          </p>
        </div>
        <div className='flex w-full justify-center lg:w-2/5 lg:justify-start'>
          <Image
            src='/logos/1.png'
            alt='Hero'
            placeholder='blur'
            blurDataURL='/logos/1.png'
            width={1200}
            height={1200}
            className='hidden h-auto w-full object-contain lg:block lg:scale-75'
          />
          <Image
            src='/logos/1.png'
            alt='Hero'
            placeholder='blur'
            blurDataURL='/logos/1.png'
            width={1200}
            height={1200}
            className='h-auto w-[50%] scale-75 object-contain lg:hidden'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
