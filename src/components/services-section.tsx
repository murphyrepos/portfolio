import React from 'react';

const ServicesSection = () => {
  return (
    <div className='mx-auto flex w-[80%] flex-col items-center justify-center space-y-20'>
      <p className='mx-auto w-[50%] text-center text-4xl font-medium text-muted-foreground'>
        Collaborate with brands and agencies to create impactful results.
      </p>
      <div className='relative flex w-full items-center justify-center'>
        <hr className='w-full border border-secondary' />
        <div className='absolute -rotate-[10deg] rounded-full bg-white px-8 py-3 text-xs text-black'>
          <p>Services</p>
        </div>
      </div>
      <div className='mx-auto w-[90%]'>
        <div className='max-w-content mx-auto flex items-center justify-center'>
          <div className='flex flex-col items-start justify-start space-y-4 px-8'>
            <h3 className='text-lg font-semibold text-muted-foreground'>
              UX & UI
            </h3>
            <p className='text-sm text-muted-foreground'>
              Designing interfaces that are intuitive, efficient, and enjoyable
              to use.
            </p>
          </div>
          <div className='flex flex-col items-start justify-start space-y-4 px-8'>
            <h3 className='text-lg font-semibold text-muted-foreground'>
              UX & UI
            </h3>
            <p className='text-sm text-muted-foreground'>
              Designing interfaces that are intuitive, efficient, and enjoyable
              to use.
            </p>
          </div>
          <div className='flex flex-col items-start justify-start space-y-4 px-8'>
            <h3 className='text-lg font-semibold text-muted-foreground'>
              UX & UI
            </h3>
            <p className='text-sm text-muted-foreground'>
              Designing interfaces that are intuitive, efficient, and enjoyable
              to use.
            </p>
          </div>
          <div className='flex flex-col items-start justify-start space-y-4 px-8'>
            <h3 className='text-lg font-semibold text-muted-foreground'>
              UX & UI
            </h3>
            <p className='text-sm text-muted-foreground'>
              Designing interfaces that are intuitive, efficient, and enjoyable
              to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
