import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const containerVariants = cva('mx-auto w-full max-w-7xl px-4', {
  variants: {
    variant: {
      default: '',
      primary: 'bg-primary text-primary-foreground',
      primary500: 'bg-primary-500 text-primary-foreground',
      hoverPrimary500: 'hover:bg-primary-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type ContainerProps = React.ComponentProps<'div'> &
  VariantProps<typeof containerVariants>;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Container.displayName = 'Container';

export { Container, containerVariants };
