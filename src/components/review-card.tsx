import React from 'react';
import { Card, CardContent } from './ui/card';
import CommentRatings from './rating-component';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Icons from './icons';

interface IReviewCardProps {
  rating: number;
  review: string;
  name: string;
  designation: string;
  company: string;
  logo?: string | null;
}
const ReviewCard: React.FC<Partial<IReviewCardProps>> = ({
  rating,
  review,
  name,
  designation,
  logo,
  company,
}) => {
  return (
    <Card className='rounded-xl border-none bg-neutral-100 shadow-none'>
      <CardContent className='mx-auto flex h-full w-full flex-col justify-between space-y-16 py-6'>
        <div className='flex flex-col items-start justify-start space-y-4'>
          <CommentRatings
            rating={rating ?? 5}
            variant='yellow'
            totalStars={5}
            fill
            size={18}
            disabled
          />
          <p className='mr-4 text-sm text-muted-foreground'>{review}</p>
        </div>
        <div className='flex w-full flex-row justify-between'>
          <div className='flex flex-row items-center space-x-2'>
            <Avatar>
              <AvatarImage src={logo ?? undefined} alt={name} />
              <AvatarFallback className='uppercase'>
                {company?.split('').map((char, index) => {
                  if (index < 2) {
                    return char;
                  }
                })}
              </AvatarFallback>
            </Avatar>
            <div className='flex flex-col items-start'>
              <p className='text-sm font-bold'>{name ?? 'Robert Fox'}</p>
              <p className='text-xs text-muted-foreground'>{designation}</p>
            </div>
          </div>
          <Icons.quotes />
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
