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
    <div className='flex h-screen w-full flex-col items-center justify-center bg-neutral-100 py-14'>
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
    </div>
  );
};

export default HeroSection;
