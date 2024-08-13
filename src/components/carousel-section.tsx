import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from './ui/card';
import Autoplay from 'embla-carousel-autoplay';

const CarouselSection = () => {
  return (
    <div className='mx-auto flex min-h-full w-full max-w-screen-2xl items-center justify-center'>
      <Carousel
        opts={{
          startIndex: 3, // Start from the 5th slide
          align: 'start',
          loop: true,
          axis: 'x',
        }}
        plugins={[Autoplay({ delay: 1000 })]}
        className='w-full'
      >
        <CarouselContent className='mx-10 flex'>
          {Array.from({ length: 12 }).map((_, index) => (
            <CarouselItem key={index} className='basis-1/6 xl:basis-[15%]'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
