import React from 'react';
import { CardType } from './type';

const CardLayout = ({ cards }: { cards: CardType }) => {
  return (
    <div className='space-y-4x mx-auto flex w-full max-w-7xl flex-col items-start py-8 lg:w-[90%]'>
      <p className={`w-full text-center text-2xl lg:text-left lg:text-4xl`}>
        Modern, Fast & Stable Apps
      </p>
      <div className='mx-auto flex w-full justify-start md:justify-center lg:mx-0 lg:justify-start'>
        <div className='grid w-full grid-cols-1 gap-6 py-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
          {cards?.cards?.map(
            (
              point: { title: string; points: { data: string[] } },
              index: number
            ) => (
              <div
                key={index}
                className='flex w-full flex-col items-center gap-2 bg-gray-100 p-10 lg:items-start lg:rounded-md lg:p-6 lg:shadow-md'
              >
                <div className='flex w-[28rem] flex-col lg:w-full'>
                  <h2 className={'mb-4 text-wrap text-2xl font-semibold'}>
                    {point.title}
                  </h2>
                  <ul className='list-inside list-disc space-y-2 text-wrap lg:ml-0'>
                    {point?.points?.data?.map((pt: string, index: number) => (
                      <li key={index} className={`text-gray-800`}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
