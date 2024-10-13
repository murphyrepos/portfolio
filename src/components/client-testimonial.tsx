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
import { cn } from '@/lib/utils';

const ClientTestimonial = () => {
  const [api, setApi] = React.useState<CarouselApi | null>();
  const [current, setCurrent] = React.useState<number>(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div
      className='mx-auto flex h-[90vh] w-[95%] max-w-7xl flex-col items-center justify-center bg-white lg:h-[70vh] lg:w-full'
      data-scroll-section
    >
      <div className='mx-auto mb-10 w-full text-center' data-scroll>
        <p className='text-2xl font-medium'>Clients Testimonial</p>
      </div>
      <div
        className='mx-auto flex w-[90%] max-w-screen-xl flex-col items-center justify-between space-x-5 space-y-10'
        data-scroll
      >
        <Carousel
          setApi={setApi}
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
          <CarouselPrevious className='hidden h-10 w-10 rounded-sm !bg-white text-primary hover:bg-opacity-100 hover:text-primary md:flex' />
          <CarouselNext className='hidden h-10 w-10 rounded-sm !bg-white text-primary hover:bg-opacity-100 hover:text-primary md:flex' />
        </Carousel>
        <div className='flex justify-center md:hidden'>
          {Array.from({ length: 4 }).map((_, index) => (
            <button
              onClick={() => api?.scrollTo(index)}
              key={index}
              className={cn(
                'border-primary-600 m-1 h-3 w-3 rounded-full border bg-white',
                index + 1 === current && 'bg-primary'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
