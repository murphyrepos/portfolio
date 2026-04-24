'use client';

import { Container } from '@/components/container';
import { Card } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

type ReviewItem = {
  name: string;
  role: string;
  review: string;
  rating: number;
  logo?: string;
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

const getInitials = (name: string): string => {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
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
                  {review.logo ? (
                    <div className='relative h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
                      <Image
                        src={review.logo}
                        alt={review.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                  ) : (
                    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 via-indigo-200 to-emerald-200 text-sm font-semibold text-slate-700'>
                      {getInitials(review.name)}
                    </div>
                  )}
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
