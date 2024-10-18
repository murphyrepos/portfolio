import React from 'react';
import StackIcon from 'tech-stack-icons';
import { DataContainer } from './type';

const FavoriteChoices = (favorites: DataContainer) => {
  return (
    <div className='mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-center space-y-8 py-8'>
      <p className='text-2xl font-medium lg:text-4xl'>Our Favorite Choices</p>
      <div className='flex flex-wrap items-center justify-center gap-12'>
        {favorites?.data?.data?.map((fav: string, index: number) => {
          return (
            <div
              key={index}
              className='flex flex-col items-center justify-center space-y-2'
            >
              <StackIcon
                className='h-20 w-20 md:h-24 md:w-24'
                name={
                  fav === 'React' || fav == 'React Native'
                    ? 'reactjs'
                    : fav === 'Adobe XD'
                      ? 'adobe'
                      : fav.replace(/\./g, '').replace(/\s/g, '').toLowerCase()
                }
              />
              <p className='font-medium'>{fav}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteChoices;
