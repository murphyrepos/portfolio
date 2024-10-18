import React from 'react';
import Image from 'next/image';
import { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface CustomImageProps extends ImageProps {
  className?: string;
  skeletonClassName?: string;
}
const CustomImage = (props: CustomImageProps) => {
  const { className, ...rest } = props;

  return (
    <>
      <Image
        {...rest}
        placeholder='blur'
        alt='image'
        className={cn(className)}
      />
    </>
  );
};

export default CustomImage;
