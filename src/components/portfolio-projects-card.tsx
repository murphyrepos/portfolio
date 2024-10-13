// Updated CardComponent.tsx
'use client';
import React from 'react';
import { CardProps } from './type';
import { Card, CardContent } from './ui/card';
import CustomImage from './custom-image';

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  technologies,
  image,
  role,
}) => {
  return (
    <Card className='lg:py-26 flex max-w-7xl items-center justify-center border-none px-10 pb-14 pt-14 shadow-md lg:pl-20 lg:pr-0'>
      <CardContent className='flex flex-col items-center justify-between space-y-5 p-0 lg:flex-row lg:space-y-0'>
        <div className='flex w-full flex-col items-start justify-start space-y-7 lg:w-2/6'>
          <h2 className='text-4xl font-semibold text-primary'>{title}</h2>
          <div className='flex w-full flex-col items-start justify-start space-y-7'>
            <div className='flex flex-col space-y-2'>
              <h2 className='text-2xl font-semibold'>Description</h2>
              <p className='text-balance text-gray-600'>{description}</p>
            </div>
            <div className='flex flex-col space-y-2'>
              <h2 className='text-2xl font-semibold'>Role</h2>
              <p className='text-balance text-gray-600'>{role}</p>
            </div>
            <div className='flex flex-col space-y-2'>
              <h3 className='font-semibold'>Technologies</h3>
              <div className='flex flex-wrap gap-2'>
                {technologies?.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className='rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full items-end justify-center rounded-md py-3 text-right lg:w-4/6 lg:px-3'>
          <div className='cursor-pointer text-center transition-transform duration-300 hover:scale-105'>
            <CustomImage
              src={image}
              alt='college-admission-advising-platform'
              className='mx-auto h-full max-h-[32rem] w-full max-w-max'
              skeletonClassName='h-96 w-96'
              width={1200}
              height={1200}
              loading='eager'
              priority
              style={{
                objectPosition: 'center',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;