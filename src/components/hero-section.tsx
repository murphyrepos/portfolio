import React from 'react';
import Icons from './icons';
import { Input } from './ui/input';
import {
  Briefcase,
  LocateIcon,
  LocateOffIcon,
  MapPin,
  Navigation2Icon,
  SearchIcon,
} from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <div className='flex w-full flex-col bg-neutral-100 py-14'>
      <div className='mx-auto flex w-[80%] max-w-screen-xl flex-row items-center justify-between space-x-5'>
        <div className='flex w-3/5 flex-col items-start justify-center space-y-6'>
          <div className='flex w-[75%] flex-col items-start justify-center space-y-6'>
            <p className='text-5xl'>
              Finad a job that suits your interest & skills.
            </p>
            <p className='text-muted-foreground'>
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin velit bestibulum.
            </p>
          </div>
          <div className='flex w-[90%] rounded-md border bg-white text-sm'>
            <div className='flex items-center space-x-4 px-2 py-2'>
              <div className='flex items-center px-2'>
                <SearchIcon size={24} className='text-primary' />
                <Input
                  type='text'
                  placeholder='Search for jobs'
                  className='rounded-md border-none p-2 text-sm font-normal outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-transparent'
                />
              </div>
              <div className='h-6 border-l border-neutral-200'></div>
              <div className='flex items-center px-2'>
                <MapPin size={24} className='text-primary' />
                <Input
                  type='text'
                  placeholder='Search for jobs'
                  className='rounded-md border-none p-2 text-sm font-normal outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-transparent'
                />
              </div>
              <Button className='rounded-sm bg-primary px-4 py-2 text-sm font-normal text-white'>
                Find Job
              </Button>
            </div>
          </div>
          <p className='text-xs'>
            <span className='text-muted-foreground'>Suggestion:</span> Designer,
            Programing, <span className='text-primary'>Digital Marketing</span>,
            Video, Animation.
          </p>
        </div>
        <div className='flex w-2/5 justify-end'>
          <Icons.illustration />
        </div>
      </div>
      <div className='mx-auto my-10 grid w-[80%] max-w-screen-xl grid-cols-4 gap-2'>
        <div className='col-span-1 flex space-x-2 rounded-sm bg-white hover:shadow-md'>
          <div className='mx-2 my-2 flex h-14 w-14 items-center justify-center rounded-sm bg-blue-400 bg-opacity-20 text-primary hover:bg-primary hover:text-white'>
            <Briefcase size={24} />
          </div>
          <div className='flex flex-col justify-center space-y-2'>
            <p className='text-base font-medium'>1,75,324</p>
            <p className='text-xs text-muted-foreground'>Live Job</p>
          </div>
        </div>
        <div className='col-span-1 flex space-x-2 rounded-sm bg-white hover:shadow-md'>
          <div className='mx-2 my-2 flex h-14 w-14 items-center justify-center rounded-sm bg-blue-400 bg-opacity-20 text-primary hover:bg-primary hover:text-white'>
            <Briefcase size={24} />
          </div>
          <div className='flex flex-col justify-center space-y-2'>
            <p className='text-base font-medium'>1,75,324</p>
            <p className='text-xs text-muted-foreground'>Live Job</p>
          </div>
        </div>
        <div className='col-span-1 flex space-x-2 rounded-sm bg-white hover:shadow-md'>
          <div className='mx-2 my-2 flex h-14 w-14 items-center justify-center rounded-sm bg-blue-400 bg-opacity-20 text-primary hover:bg-primary hover:text-white'>
            <Briefcase size={24} />
          </div>
          <div className='flex flex-col justify-center space-y-2'>
            <p className='text-base font-medium'>1,75,324</p>
            <p className='text-xs text-muted-foreground'>Live Job</p>
          </div>
        </div>
        <div className='col-span-1 flex space-x-2 rounded-sm bg-white hover:shadow-md'>
          <div className='mx-2 my-2 flex h-14 w-14 items-center justify-center rounded-sm bg-blue-400 bg-opacity-20 text-primary hover:bg-primary hover:text-white'>
            <Briefcase size={24} />
          </div>
          <div className='flex flex-col justify-center space-y-2'>
            <p className='text-base font-medium'>1,75,324</p>
            <p className='text-xs text-muted-foreground'>Live Job</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
