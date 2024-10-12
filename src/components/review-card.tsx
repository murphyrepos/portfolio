import React from 'react';
import { Card, CardContent } from './ui/card';
import CommentRatings from './rating-component';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Icons from './icons';

const ReviewCard = () => {
  return (
    <Card className='rounded-xl border-none bg-neutral-100 shadow-none'>
      <CardContent className='mx-auto flex w-full flex-col justify-between space-y-16 py-6'>
        <div className='flex flex-col items-start justify-start space-y-4'>
          <CommentRatings
            rating={4.5}
            variant='yellow'
            totalStars={5}
            fill
            size={18}
            disabled
          />
          <p className='mr-4 text-sm text-muted-foreground'>
            “Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac
            placerat metus, in faucibus est.”
          </p>
        </div>
        <div className='flex w-full flex-row justify-between'>
          <div className='flex flex-row items-center space-x-2'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex flex-col items-start'>
              <p className='text-sm font-bold'>Robert Fox</p>
              <p className='text-xs text-muted-foreground'>UI/UX designer</p>
            </div>
          </div>
          <Icons.quotes />
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
