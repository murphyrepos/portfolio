import React from 'react';
import { Button } from './ui/button';
import WorkFlowCard from './work-flow-card';
import { Card } from './ui/card';
import Link from 'next/link';
import { services } from '@/utils/constants/services.content';

const Services = () => {
  return (
    <div
      className='mx-auto mb-10 flex w-[90%] flex-col justify-evenly py-10 lg:flex-row'
      data-scroll-section
    >
      <div id='fixed' className='w-full lg:w-1/2 lg:py-8' data-scroll>
        <div
          data-scroll-sticky
          data-scroll
          data-scroll-target='#fixed'
          data-scroll-repeat
          className='flex flex-col items-start justify-center space-y-8 px-8'
        >
          <p className='text-primary'>Our Services</p>
          <p className='w-[100%] text-3xl font-medium'>
            Gain a competitive edge with our customized approach to meeting your
            business objectives
          </p>
          <p className='text-muted-foreground'>
            Taking a customized approach to every project we undertake, our
            rock-solid process is tailored to suit our clients’ needs. Our
            refined methodology delivers the best possible results, streamlining
            business operations and driving growth for startups and large
            enterprises. Trust us to help you achieve success with our
            tailor-made software development methodology.
          </p>
          <a href='#footer' data-scroll-to>
            <Button
              className='x-10 rounded-full py-6 text-xl transition-all duration-500 hover:bg-white hover:text-primary hover:ring-2'
              variant={'default'}
            >
              Contact Us
            </Button>
          </a>
        </div>
      </div>
      <div className='flex w-full flex-1 lg:px-10'>
        <div className='flex w-full rounded-md border border-none px-4 shadow-none xl:flex-col'>
          <div className='flex flex-col justify-end md:flex-row md:flex-wrap lg:flex-col lg:flex-nowrap lg:space-y-10'>
            {services.map(({ title, description, url }, index) => (
              <Link href={url} key={index}>
                <Card
                  data-scroll
                  className='min-h-50 my-4 rounded-xl border-none shadow-none md:basis-1/2 md:px-2 lg:mx-5 xl:mx-10'
                >
                  <WorkFlowCard
                    invertColor
                    title={title}
                    description={description}
                    descriptionClassNames='text-justify'
                  />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
