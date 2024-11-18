'use client';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import PortfolioDetailOverview from './portfolio-detail-overview';
import { services } from '@/utils/constants/services.content';

const Services = () => {
  return (
    <div
      className='mx-auto mb-10 flex max-w-7xl flex-col items-center justify-center gap-20 py-20'
      id='services'
    >
      <div className='mx-auto w-[90%] max-w-screen-2xl'>
        <div className='mx-auto flex flex-col items-center justify-center gap-3 text-center'>
          <h4 className='text-center text-xl font-bold text-primary md:text-2xl lg:text-3xl'>
            Our Services
          </h4>
          <p className='w-full text-3xl font-medium'>
            Get ahead with custom solutions that align with your goals.
          </p>
          <p className='text-muted-foreground'>
            Our custom approach delivers results. We tailor our software
            development process to your unique needs, streamlining operations
            and driving growth for businesses of all sizes.
          </p>
          <Link href='#footer'>
            <Button
              className='rounded-full py-4 text-base transition-all duration-500 hover:bg-white hover:text-primary hover:ring-2'
              variant={'default'}
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-5'>
        {services.map((service, index) => (
          <PortfolioDetailOverview
            key={index}
            url={service.url}
            logo={service.icon}
            name={service.title}
            description={service.description}
          />
        ))}
      </div>
      {/* <div className='flex w-full flex-1 md:mt-5 xl:px-10'>
        <div className='flex w-full rounded-md border border-none px-4 shadow-none xl:flex-col'>
          <div className='relative flex flex-col justify-end md:flex-row md:flex-wrap lg:flex-col lg:flex-nowrap lg:space-y-10'>
            
            {services.map(({ title, description, url }, index) => (
              <Link href={url} key={index}>
                <Card className='min-h-50 my-4 rounded-xl border-none shadow-none md:basis-1/2 md:px-2 lg:mx-5 xl:mx-10'>
                  <WorkFlowCard
                    invertColor
                    showMore
                    title={title}
                    description={description}
                  />
                </Card>
              </Link>
            ))}
          </div>
        </div> */}
    </div>
  );
};

export default Services;
