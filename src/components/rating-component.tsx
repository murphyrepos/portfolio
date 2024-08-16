import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DeviceType, detectDevice } from '@/utils/helper';

const ratingVariants = {
  default: {
    star: 'text-neutral-200 ',
    emptyStar: 'text-neutral-200 fill-neutral-200',
  },
  muted: {
    star: 'text-neutral-400 ',
    emptyStar: 'text-neutral-200 fill-neutral-200',
  },
  yellow: {
    star: 'text-yellow-500',
    emptyStar: 'text-neutral-200 fill-neutral-200',
  },
  gold: {
    star: 'text-[#FF9D09]',
    emptyStar: 'text-[#FF9D0966] fill-[#FF9D0911]',
  },
  silver: {
    star: 'text-[#696969]',
    emptyStar: 'text-[#69696966] fill-[#69696911]',
  },
  bronze: {
    star: 'text-[#843C1D]',
    emptyStar: 'text-[#843C1D66] fill-[#843C1D11]',
  },
};

interface RatingsProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  totalStars?: number;
  size?: number;
  fill?: boolean;
  Icon?: React.ReactElement;
  variant?: keyof typeof ratingVariants;
  onRatingChange?: (rating: number) => void;
  disabled?: boolean; // Add disabled prop
}

export const CommentRatings = ({
  rating: initialRating,
  totalStars = 5,
  size = 20,
  fill = true,
  Icon = <Star />,
  variant = 'default',
  onRatingChange,
  disabled = false, // Default to false if disabled prop is not provided
  ...props
}: RatingsProps) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [currentRating, setCurrentRating] = useState(initialRating);
  const [isHovering, setIsHovering] = useState(false);
  const [displayRating, setDisplayRating] = useState(initialRating);
  const [deviceDetected, setDeviceDetected] = useState<DeviceType>(
    DeviceType.Desktop
  );
  // Usage
  const deviceType: DeviceType = detectDevice();

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!disabled) {
      setIsHovering(true);
      const starIndex = parseInt(
        (event.currentTarget as HTMLDivElement).dataset.starIndex ?? '0'
      );
      onRatingChange?.(currentRating);
      setHoverRating(starIndex);
    }
  };

  useEffect(() => {
    setDeviceDetected(deviceType);
  }, [deviceType]);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverRating(null);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!disabled) {
      const starIndex = parseInt(
        (event.currentTarget as HTMLDivElement).dataset.starIndex ?? '0'
      );
      setCurrentRating(starIndex);
      if (onRatingChange) {
        onRatingChange(starIndex);
      }
    }
  };

  useEffect(() => {
    setCurrentRating(initialRating);
    setDisplayRating(initialRating);
  }, [initialRating]);

  useEffect(() => {
    if (!disabled) {
      onRatingChange?.(currentRating);
      setDisplayRating(currentRating);
    }
  }, [currentRating, disabled, onRatingChange]);

  useEffect(() => {
    if (disabled) return;
    if (isHovering && hoverRating !== null) {
      if (deviceDetected === DeviceType.Mobile) {
        onRatingChange?.(hoverRating);
      }
      setDisplayRating(hoverRating);
    } else {
      onRatingChange?.(currentRating);
      setDisplayRating(currentRating);
    }
  }, [
    hoverRating,
    isHovering,
    currentRating,
    disabled,
    deviceDetected,
    onRatingChange,
  ]);

  const fullStars = Math.floor(displayRating);

  const partialStar =
    displayRating % 1 > 0 ? (
      <PartialStar
        fillPercentage={displayRating % 1}
        size={size}
        className={cn(ratingVariants[variant].star)}
        Icon={Icon}
      />
    ) : null;

  return (
    <div
      className={cn('flex w-fit flex-col gap-2', {
        'pointer-events-none': disabled,
      })}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className='flex items-center'
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleMouseEnter}
        onTouchMove={handleMouseEnter}
      >
        {[...Array(fullStars)].map((_, i) =>
          React.cloneElement(Icon, {
            key: i,
            size,
            className: cn(
              fill ? 'fill-current stroke-1' : 'fill-transparent',
              ratingVariants[variant].star
            ),
            onClick: handleClick,
            onTouchEnd: handleClick,
            onMouseEnter: handleMouseEnter,
            onTouchStart: handleMouseEnter,
            'data-star-index': i + 1,
          })
        )}
        {partialStar}
        {[
          ...Array(Math.max(0, totalStars - fullStars - (partialStar ? 1 : 0))),
        ].map((_, i) =>
          React.cloneElement(Icon, {
            key: i + fullStars + 1,
            size,
            className: cn('stroke-1', ratingVariants[variant].emptyStar),
            onClick: handleClick,
            onTouchEnd: handleClick,
            onMouseEnter: handleMouseEnter,
            onTouchStart: handleMouseEnter,
            'data-star-index': i + fullStars + 1,
          })
        )}
      </div>
    </div>
  );
};

interface PartialStarProps {
  fillPercentage: number;
  size: number;
  className?: string;
  Icon: React.ReactElement;
}

const PartialStar = ({
  fillPercentage,
  size,
  className,
  Icon,
}: PartialStarProps) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {React.cloneElement(Icon, {
        size,
        className: cn('fill-transparent', className),
      })}
      <div
        style={{
          position: 'absolute',
          top: 0,
          overflow: 'hidden',
          width: `${fillPercentage * 100}%`,
        }}
      >
        {React.cloneElement(Icon, {
          size,
          className: cn('fill-current', className),
        })}
      </div>
    </div>
  );
};

export default CommentRatings;
