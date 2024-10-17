import React, { useState } from 'react';
import Image from 'next/image';
import { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface CustomImageProps extends ImageProps {
  className?: string;
  skeletonClassName?: string;
}
const CustomImage = (props: CustomImageProps) => {
  const { className, ...rest } = props;
  const [loading, setIsLoading] = useState(false);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Image
        {...rest}
        placeholder='blur'
        onLoad={handleImageLoad}
        alt='image'
        className={cn(className, loading ? 'hidden' : '')}
      />
    </>
  );
};

export default CustomImage;
