import React from 'react';
import { Button } from './ui/button';

import { ServiceDetailType } from './type';
import Link from 'next/link';

const ServiceDetailCard = ({ data }: ServiceDetailType) => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-4 bg-neutral-100 py-20`}
    >
      <div
        className={`mx-auto mt-14 flex w-full max-w-7xl flex-col items-center justify-center gap-8 lg:w-[90%]`}
      >
        <p className={`text-4xl font-bold`}>{data?.title}</p>
        <p className={`w-[70%] text-center text-xl`}>{data.description}</p>
        <Link href={'/portfolio'}>
          <Button className={`rounded-none px-12 py-7 text-lg capitalize`}>
            {data.buttonTitle}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
