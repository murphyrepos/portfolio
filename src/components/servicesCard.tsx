import React from 'react';
import { CardType } from './type';
import { spaceGrotesk } from 'src/pages';

const CardLayout = ({ cards }: { cards: CardType }) => {
  return (
    <div className='m-auto flex w-[90%] flex-col items-start space-y-10 py-8'>
      <p className={`${spaceGrotesk.className} text-4xl`}>
        Modern, Fast & Stable Apps
      </p>
      <div className='grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3'>
        {cards?.cards?.map(
          (
            point: { title: string; points: { data: string[] } },
            index: number
          ) => (
            <div key={index} className='rounded-md bg-gray-100 p-6 shadow-md'>
              <h2
                className={`${spaceGrotesk.className} mb-4 text-2xl font-semibold`}
              >
                {point.title}
              </h2>
              <ul className='list-inside list-disc space-y-2'>
                {point?.points?.data?.map((pt: string, index: number) => (
                  <li
                    key={index}
                    className={`${spaceGrotesk.className} text-gray-800`}
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardLayout;
