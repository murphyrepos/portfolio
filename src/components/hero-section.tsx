import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const HeroSection = () => {
  return (
    <section id='home' className='relative overflow-hidden bg-slate-100 pb-16 pt-28 lg:pb-20'>
      <div className='absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-100 to-slate-50' />

      <div className='relative z-10 mx-auto grid w-full max-w-[1240px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8'>
        <div className='space-y-8'>
          <div className='inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-base font-medium text-primary'>
            <Sparkles size={18} />
            <span>Creative Digital Agency</span>
          </div>

          <h1 className='max-w-xl text-balance text-5xl font-bold leading-[1.05] text-slate-900 lg:text-7xl'>
            We Build Digital Excellence
          </h1>

          <p className='max-w-xl text-balance text-xl text-slate-600'>
            Transform your vision into reality with cutting-edge design and
            development solutions
          </p>

          <div className='flex flex-wrap items-center gap-4'>
            <Link
              href='/#contact'
              className='inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-600'
            >
              Get Started
              <ArrowRight size={22} />
            </Link>

            <Link
              href='/services'
              className='inline-flex items-center rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-lg font-medium text-slate-800 transition-colors hover:border-slate-400'
            >
              Our Services
            </Link>
          </div>
        </div>

        <div className='relative'>
          <Skeleton className='h-[420px] w-full rounded-[2rem] bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300 md:h-[620px]' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
