import React from 'react';
import { CardType } from './type';

const CardLayout = ({ cards }: { cards: CardType }) => {
  return (
    <div className='mx-auto my-7 flex w-full max-w-7xl flex-col items-center justify-center gap-8 py-10 lg:w-[90%]'>
      <p className='w-full text-center text-2xl font-medium lg:text-4xl'>
        Modern, Fast & Stable Apps
      </p>
      <div className='mx-auto flex w-full justify-start md:justify-center lg:mx-0 lg:justify-start'>
        <div className='mx-4 grid w-full grid-cols-1 gap-6 py-6 md:mx-8 lg:grid-cols-2 xl:grid-cols-3'>
          {cards?.cards?.map(
            (
              point: { title: string; points: { data: string[] } },
              index: number
            ) => (
              <div
                key={index}
                className='flex w-full flex-col items-center gap-2 rounded-xl bg-gray-100 p-10 shadow-xl shadow-neutral-200 lg:items-start lg:p-6'
              >
                <div className='flex w-full max-w-[28rem] flex-col'>
                  <h2
                    className={
                      'mb-4 text-wrap text-center text-2xl font-semibold lg:text-left'
                    }
                  >
                    {point.title}
                  </h2>
                  <ul className='ml-0 list-inside list-none space-y-2 text-wrap text-center marker:text-left lg:ml-0 lg:list-disc lg:text-left'>
                    {point?.points?.data?.map((pt: string, index: number) => (
                      <li
                        key={index}
                        className={`text-gray-800 marker:text-left`}
                      >
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
