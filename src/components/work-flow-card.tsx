'use client';
import { cn } from '@/lib/utils';
import { UserIcon } from 'lucide-react';
import React from 'react';
import { Card } from './ui/card';

interface WorkFlowCardProps {
  invertColor?: boolean;
}
const WorkFlowCard = ({ invertColor }: WorkFlowCardProps) => {
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
        <UserIcon size={32} />
      </div>
      <p className='text-xl'>Create Account</p>
      <p className='text-center text-sm text-muted-foreground'>
        We use effective communication to gather detailed requirements and
        exceed clients’ expectations. We work closely with clients to understand
        their unique needs and make necessary adjustments throughout the
        development process, enabling us to provide the best solutions possible.
      </p>
    </div>
  );
};

export default WorkFlowCard;
