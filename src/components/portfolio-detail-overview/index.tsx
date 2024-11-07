import Link from 'next/link';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import StackIcon from 'tech-stack-icons';

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
      className='border-1 group mx-auto flex w-[90%] items-center justify-center gap-5 rounded-3xl border-neutral-100 bg-neutral-100 px-4 py-4 md:max-w-[900px]'
      href={url}
    >
      <div className='flex w-full flex-1 items-center justify-center gap-6 bg-neutral-100'>
        <StackIcon
          className='aspect-square h-[40px] w-[40px] rounded-lg object-contain md:h-[100px] md:w-[100px]'
          name={logo}
        />
        <div className='flex w-full flex-col items-start gap-2'>
          <h1 className='text-sm font-bold text-black md:text-xl'>{name}</h1>
          <p className='text-xs text-muted-foreground md:text-sm'>
            {description}
          </p>
        </div>
        <div className='flex min-h-7 min-w-7 flex-col items-center justify-center rounded-full border border-primary bg-[#FAFAFA] transition-all delay-150 duration-300 group-hover:translate-x-1 md:min-h-10 md:min-w-10'>
          <ChevronRight className='h-4 w-4 text-primary md:h-6 md:w-6' />
        </div>
      </div>
    </Link>
  );
};

export default PortfolioDetailOverview;
