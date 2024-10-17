import React from 'react';
import StackIcon from 'tech-stack-icons';
import { DataContainer } from './type';

const Technologies = (technologies: DataContainer) => {
  return (
    <div className='mx-auto flex w-[90%] max-w-7xl flex-col items-center space-y-4 py-8 lg:items-start'>
      <p className='text-center text-2xl font-medium lg:text-4xl'>
        Technologies
      </p>
      <div className='flex flex-wrap items-center justify-center gap-12'>
        {technologies?.data?.data?.map((tech: string, index: number) => {
          return (
            <div
              key={index}
              className='flex flex-col items-center justify-center space-y-2'
            >
              <StackIcon
                className='h-20 w-20 md:h-24 md:w-24'
                name={
                  tech === 'React' || tech == 'React Native'
                    ? 'reactjs'
                    : tech === 'Adobe XD'
                      ? 'adobe'
                      : tech.replace(/\./g, '').replace(/\s/g, '').toLowerCase()
                }
              />
              <p className={`font-medium`}>{tech}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
