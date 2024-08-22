import React from 'react';
import StackIcon from 'tech-stack-icons';

const Technologies = () => {
  return (
    <div className='flex w-[90%] flex-col items-start space-y-10 py-8'>
      <p className='text-4xl'>Technolgies</p>
      <div className='mx-auto grid w-[90%] grid-cols-6 gap-8'>
        <div className='grid-col-1 flex flex-col items-center justify-center space-y-3'>
          <StackIcon name='reactjs' />
          <p className='font-medium'>React</p>
        </div>
        <div className='grid-col-1 flex flex-col items-center justify-center space-y-3'>
          <StackIcon name='angular' />
          <p className='font-medium'>Angular</p>
        </div>
        <div className='grid-col-1 flex flex-col items-center justify-center space-y-3'>
          <StackIcon name='vuejs' />
          <p className='font-medium'>Vue.js</p>
        </div>{' '}
        <div className='grid-col-1 flex flex-col items-center justify-center space-y-3'>
          <StackIcon name='nestjs' />
          <p className='font-medium'>Nest.js</p>
        </div>
        <div className='grid-col-1 flex flex-col items-center justify-center space-y-3'>
          <StackIcon name='nextjs' />
          <p className='font-medium'>Next.js</p>
        </div>
        <div className='grid-col-1 flex flex-col items-center justify-center space-y-3'>
          <StackIcon name='nodejs' />
          <p className='font-medium'>Node.js</p>
        </div>
        <div className='grid-col-1 flex flex-col items-center justify-center space-y-3'>
          <StackIcon name='graphql' />
          <p className='font-medium'>GraphQL</p>
        </div>
        <div className='grid-col-1 flex flex-col items-center justify-center space-y-3'>
          <StackIcon name='typescript' />
          <p className='font-medium'>Typescript</p>
        </div>
        <div className='grid-col-1 flex flex-col items-center justify-center space-y-3'>
          <StackIcon name='flutter' />
          <p className='font-medium'>Flutter</p>
        </div>
        <div className='grid-col-1 flex flex-col items-center justify-center space-y-3'>
          <StackIcon name='serverless' />
          <p className='font-medium'>ServerLess</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
