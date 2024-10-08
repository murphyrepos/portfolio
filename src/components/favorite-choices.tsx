import React from 'react';
import StackIcon from 'tech-stack-icons';
import { FavouritesType } from './type';

const FavoriteChoices = (favourites: FavouritesType) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-8 py-8'>
      <p className='text-2xl font-medium'>Our Favorite Choices</p>
      <div className='flex items-center justify-center space-x-12'>
        {favourites?.data?.map((fav: any) => {
          return (
            <div className='flex flex-col items-center justify-center space-y-2'>
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
