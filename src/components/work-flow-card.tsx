'use client';
import { cn } from '@/lib/utils';
import { ChevronRightIcon } from 'lucide-react';
import React from 'react';
import { IconProps } from './type';

interface WorkFlowCardProps {
  invertColor?: boolean;
  title: string;
  description: string;
  showMore?: boolean;
  descriptionClassNames?: string;
  icon: React.FC<IconProps>;
}
const WorkFlowCard = ({
  invertColor,
  title,
  showMore,
  description,
  descriptionClassNames = '',
  icon,
}: WorkFlowCardProps) => {
  const Icon = icon;
  return (
    <div
      className={cn(
        'flex h-full flex-col items-center justify-center space-y-4 rounded-xl bg-white px-8 py-6',
        invertColor && 'bg-neutral-100'
      )}
    >
      <div
        className={cn(
          'flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white',
          invertColor && 'bg-white text-primary'
        )}
      >
        <Icon className='h-8 w-8' />
      </div>
      <p className='text-xl'>{title}</p>
      <p
        className={cn(
          'text-left text-sm text-muted-foreground',
          descriptionClassNames
        )}
      >
        {description}
      </p>
      {showMore && (
        <div className='group flex items-center justify-center hover:text-primary'>
          <p className='underline underline-offset-1'>View More</p>
          <ChevronRightIcon className='h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1' />
        </div>
      )}
    </div>
  );
};

export default WorkFlowCard;
