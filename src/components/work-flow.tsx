import React from 'react';
import WorkFlowCard from './work-flow-card';
import { workflow } from '@/utils/constants/workflow.content';

const WorkFlow = () => {
  return (
    <div
      className='mx-auto my-10 flex w-full flex-col bg-neutral-100 py-16'
      id='workflow'
    >
      <div className='mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-center gap-10'>
        <p className='text-2xl font-semibold'>How Murphy Repos Works</p>
        <div className='flex flex-col items-start justify-between md:flex-row md:flex-wrap xl:flex-nowrap'>
          {workflow.map(({ title, description, Icon }) => (
            <div className='relative md:basis-1/2 xl:basis-1/4' key={title}>
              <WorkFlowCard
                descriptionClassNames='text-center'
                invertColor
                title={title}
                icon={Icon}
                description={description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
