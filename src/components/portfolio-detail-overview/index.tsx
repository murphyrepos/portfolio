import Link from 'next/link';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
interface PortfolioDetailOverviewProps {
  name: string;
  description: string;

  logo: string;
  url: string;
}
const PortfolioDetailOverview = ({
  name,
  description,
  logo,
  url,
}: PortfolioDetailOverviewProps) => {
  return (
    <Link
      className='border-1 group mx-auto flex w-[90%] items-center justify-center gap-5 rounded-3xl border-neutral-100 bg-neutral-100 px-4 py-4 shadow-lg shadow-neutral-200 md:max-w-[900px]'
      href={url}
    >
      <div className='flex w-full flex-1 flex-col items-center justify-center gap-6 bg-neutral-100 shadow-neutral-100 sm:flex-row'>
        <DotLottieReact src={logo} autoplay loop className='max-w-18' />
        <div className='flex w-full flex-col items-start gap-2'>
          <h1 className='text-sm font-bold text-black md:text-xl'>{name}</h1>
          <p className='text-xs text-muted-foreground md:text-sm'>
            {description}
          </p>
        </div>
        <div className='flex min-h-7 min-w-7 flex-col items-center justify-center rounded-full border border-primary bg-[#FAFAFA] transition-all delay-150 duration-300 group-hover:animate-pulse md:min-h-10 md:min-w-10'>
          <ChevronRight className='h-4 w-4 text-primary md:h-6 md:w-6' />
        </div>
      </div>
    </Link>
  );
};

export default PortfolioDetailOverview;
