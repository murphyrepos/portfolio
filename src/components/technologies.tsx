import React from 'react';
import StackIcon from 'tech-stack-icons';
import { DataContainer } from './type';
import { spaceGrotesk } from 'src/pages';

const Technologies = (technologies: DataContainer) => {
  return (
    <div className='m-auto flex w-[90%] flex-col items-start space-y-10 py-8'>
      <p className={`${spaceGrotesk.className} text-4xl`}>Technolgies</p>
      <div className='mx-auto grid w-[90%] grid-cols-6 gap-8'>
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
              <p className={`${spaceGrotesk.className} font-medium`}>{tech}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
