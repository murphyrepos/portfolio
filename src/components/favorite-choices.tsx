import React from 'react';
import StackIcon from 'tech-stack-icons';
import { DataContainer } from './type';

const FavoriteChoices = (favorites: DataContainer) => {
  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center justify-center space-y-8 py-8'>
      <p className='text-2xl font-medium'>Our Favorite Choices</p>
      <div className='flex items-center justify-center space-x-12'>
        {favorites?.data?.data?.map((fav: string, index: number) => {
          return (
            <div
              key={index}
              className='flex flex-col items-center justify-center space-y-2'
            >
              <StackIcon
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
