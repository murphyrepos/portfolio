import React from 'react';
import { Button } from './ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import WorkFlowCard from './work-flow-card';
import { Card } from './ui/card';

const Services = () => {
  return (
    <div className='mx-auto flex w-[90%] justify-evenly py-10'>
      <div className='flex w-1/2 flex-col items-start justify-start space-y-8 px-8'>
        <p className='text-primary'>Our Services</p>
        <p className='w-[100%] text-3xl font-medium'>
          Gain a competitive edge with our customized approach to meeting your
          business objectives
        </p>
        <p className='text-muted-foreground'>
          Taking a customized approach to every project we undertake, our
          rock-solid process is tailored to suit our clients’ needs. Our refined
          methodology delivers the best possible results, streamlining business
          operations and driving growth for startups and large enterprises.
          Trust us to help you achieve success with our tailor-made software
          development methodology.
        </p>
        <Button className='x-10 rounded-full py-6 text-xl' variant={'ghost'}>
          Contact Us
        </Button>
      </div>
      <div className='flex max-h-[600px] w-full flex-1 px-10'>
        <ScrollArea className='flex max-h-[600px] w-full flex-col rounded-md border border-none px-4 shadow-none'>
          <div className='flex-col justify-end space-y-10'>
            <Card className='my-4 border-none px-20 shadow-sm'>
              <WorkFlowCard invertColor />
            </Card>
            <Card className='min-h-50 mx-20 my-4 rounded-xl border-none shadow-sm'>
              <WorkFlowCard invertColor />
            </Card>
            <Card className='min-h-50 mx-20 my-4 rounded-xl border-none shadow-sm'>
              <WorkFlowCard invertColor />
            </Card>
            <Card className='min-h-50 mx-20 my-4 rounded-xl border-none shadow-sm'>
              <WorkFlowCard invertColor />
            </Card>
            <Card className='min-h-50 mx-20 my-4 rounded-xl border-none shadow-sm'>
              <WorkFlowCard invertColor />
            </Card>
            <Card className='min-h-50 mx-20 my-4 rounded-xl border-none shadow-sm'>
              <WorkFlowCard invertColor />
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Services;
