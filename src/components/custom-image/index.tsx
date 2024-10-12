import React, { useState } from 'react';
import Image from 'next/image';
import { type ImageProps } from 'next/image';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/lib/utils';

interface CustomImageProps extends ImageProps {
  className?: string;
  skeletonClassName?: string;
}
const CustomImage = (props: CustomImageProps) => {
  const { className, skeletonClassName, ...rest } = props;
  const [loading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {loading && skeletonClassName && (
        <div className='w-full'>
          <Skeleton className={cn('mx-auto w-full', skeletonClassName)}>
            &nbsp;
          </Skeleton>
        </div>
      )}
      <Image
        {...rest}
        onLoad={handleImageLoad}
        loading='eager'
        alt='image'
        className={cn(className, loading ? 'hidden' : '')}
      />
    </>
  );
};

export default CustomImage;
