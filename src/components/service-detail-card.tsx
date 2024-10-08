import React from 'react';
import { Button } from './ui/button';

import { ServiceDetailType } from './type';
import { spaceGrotesk } from 'src/pages';

const ServiceDetailCard = (data: ServiceDetailType) => {
  const testimonialConstants = data.data.reduce(
    (
      acc: Partial<{ title: string; description: string; buttonTitle: string }>,
      item: { title?: string; description?: string; buttonTitle?: string }
    ) => ({
      ...acc,
      ...item,
    }),
    {}
  );
  return (
    <div
      className={`flex w-[100%] flex-col items-start justify-center space-y-4 bg-neutral-100 py-14`}
    >
      <div
        className={`${spaceGrotesk.className} mx-auto mt-14 flex w-[90%] flex-col items-start justify-center space-y-4`}
      >
        <p className={`text-4xl font-bold`}>{testimonialConstants?.title}</p>
        <p className={`${spaceGrotesk.className} w-[70%] text-xl`}>
          {testimonialConstants.description}
        </p>
        <Button
          className={`${spaceGrotesk.className} rounded-none px-12 py-7 text-lg capitalize`}
        >
          {testimonialConstants.buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
