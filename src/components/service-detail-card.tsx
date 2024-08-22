import React from 'react';
import { Button } from './ui/button';

const ServiceDetailCard = () => {
  return (
    <div className='flex w-[100%] flex-col items-start justify-center space-y-4 bg-neutral-100 py-14'>
      <div className='mx-auto mt-14 flex w-[90%] flex-col items-start justify-center space-y-4'>
        <p className='text-4xl font-bold'>Web Development</p>
        <p className='w-[70%] text-xl'>
          We create responsive web applications leveraging the most robust
          technologies to help you boost your business
        </p>
        <Button className='rounded-none px-12 py-7 text-lg capitalize'>
          See our Work
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
