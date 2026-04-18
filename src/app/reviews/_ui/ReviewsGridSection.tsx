'use client';

import { Container } from '@/components/container';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Quote, Star } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

type ReviewItem = {
  name: string;
  role: string;
  review: string;
  rating: number;
};

const reviewsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const reviewCardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const ReviewsGridSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation('common', { keyPrefix: 'reviewsPage.grid' });
  const reviewsRaw = t('items', { returnObjects: true });
  const reviews = Array.isArray(reviewsRaw) ? (reviewsRaw as ReviewItem[]) : [];

  return (
    <section className='bg-gray-50 py-20 lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <motion.div
          className='mx-auto grid max-w-6xl auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3'
          variants={reviewsContainerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {reviews.map((review) => (
            <motion.article
              key={review.name}
              className='h-full'
              variants={shouldReduceMotion ? undefined : reviewCardVariants}
              transition={shouldReduceMotion ? undefined : { duration: 0.45 }}
              whileHover={
                shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }
              }
            >
              <Card className='hover:border-primary flex h-full flex-col gap-4 rounded-2xl p-12 transition-shadow hover:shadow-lg'>
                <div className='flex items-center gap-4'>
                  <Skeleton className='h-12 w-12 rounded-full bg-gray-300' />
                  <div>
                    <h2 className='text-lg font-bold text-gray-900'>
                      {review.name}
                    </h2>
                    <p className='text-gray-600'>{review.role}</p>
                  </div>
                </div>

                <div className='flex gap-1'>
                  {Array.from({ length: Number(review.rating) || 0 }).map(
                    (_, starIndex) => {
                      return (
                        <Star
                          key={`${review.name}-${starIndex}`}
                          className='h-4 w-4 fill-yellow-400 text-yellow-400'
                        />
                      );
                    }
                  )}
                </div>

                <div className='relative'>
                  <Quote className='absolute -top-1 -left-1 h-6 w-6 text-blue-200' />
                  <p className='pl-7 text-sm leading-relaxed text-gray-600'>
                    {review.review}
                  </p>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ReviewsGridSection;
