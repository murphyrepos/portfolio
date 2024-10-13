import React from 'react';
import StackIcon from 'tech-stack-icons';
import { DataContainer } from './type';

const Technologies = (technologies: DataContainer) => {
  return (
    <div className='m-auto flex w-[90%] max-w-7xl flex-col items-start space-y-4 py-8'>
      <p className={`text-4xl`}>Technolgies</p>
      <div className='grid w-full grid-cols-6 gap-x-6 gap-y-8'>
        {technologies?.data?.data?.map((tech: string, index: number) => {
          return (
            <div
              key={index}
              className='grid-col-1 flex flex-col items-center justify-center space-y-3'
            >
              <StackIcon
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
