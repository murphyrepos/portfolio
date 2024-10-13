import React from 'react';
import { Button } from './ui/button';

import { ServiceDetailType } from './type';
import Link from 'next/link';

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
      className={`flex w-full flex-col items-start justify-center space-y-4 bg-neutral-100 py-14`}
    >
      <div
        className={`mx-auto mt-14 flex w-[90%] max-w-7xl flex-col items-start justify-center space-y-4`}
      >
        <p className={`text-4xl font-bold`}>{testimonialConstants?.title}</p>
        <p className={`w-[70%] text-xl`}>{testimonialConstants.description}</p>
        <Link href={'/portfolio'}>
          <Button className={`rounded-none px-12 py-7 text-lg capitalize`}>
            {testimonialConstants.buttonTitle}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
