import React, { useEffect } from 'react';
import ReviewCard from './review-card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
const ClientTestimonial = () => {
  return (
    <div
      className='flex h-[60vh] w-full flex-col items-center justify-center bg-white lg:h-[40vh]'
      data-scroll-section
    >
      <div className='mx-auto mb-10 w-full text-center' data-scroll>
        <p className='text-2xl font-medium'>Clients Testimonial</p>
      </div>
      <div
        className='mx-auto flex w-[90%] max-w-screen-xl flex-row items-center justify-between space-x-5'
        data-scroll
      >
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full'
        >
          <CarouselContent>
            <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
              <ReviewCard />
            </CarouselItem>
            <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
              <ReviewCard />
            </CarouselItem>
            <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
              <ReviewCard />
            </CarouselItem>
            <CarouselItem className='md:basis-1/2 lg:basis-1/3'>
              <ReviewCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className='h-10 w-10 rounded-sm !bg-white text-primary hover:bg-opacity-100 hover:text-primary' />
          <CarouselNext className='h-10 w-10 rounded-sm !bg-white text-primary hover:bg-opacity-100 hover:text-primary' />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientTestimonial;
