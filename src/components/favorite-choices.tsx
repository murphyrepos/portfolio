import React from 'react';
import Icons from './icons';
import StackIcon from 'tech-stack-icons';

const FavoriteChoices = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-8 py-8'>
      <p className='text-2xl font-medium'>Our Favorite Choices</p>
      <div className='flex items-center justify-center space-x-12'>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <StackIcon name='reactjs' />
          <p className='font-medium'>React</p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <StackIcon name='nestjs' />
          <p className='font-medium'>Nest.js</p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <StackIcon name='nodejs' />
          <p className='font-medium'>Node.Js</p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <StackIcon name='graphql' />
          <p className='font-medium'>GraphQL</p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-2'>
          <StackIcon name='nextjs' />
          <p className='font-medium'>Next.js</p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteChoices;
