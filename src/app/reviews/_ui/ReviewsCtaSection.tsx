'use client';

import { Container } from '@/components/container';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const ReviewsCtaSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation('common', { keyPrefix: 'reviewsPage.cta' });

  return (
    <section className='py-20 lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <motion.div
          className='mx-auto max-w-4xl text-center'
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
        >
          <h2 className='text-xl font-bold text-gray-900 lg:text-4xl'>
            {t('title')}
          </h2>
          <p className='mt-3 text-balance text-gray-600 lg:text-xl'>
            {t('description')}
          </p>
          <div className='mt-10'>
            <Link
              href='/#contact'
              className='group bg-primary-500 hover:bg-primary-600 inline-flex items-center gap-2 rounded-xl px-8 py-4 text-white transition-colors'
            >
              {t('button')}
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ReviewsCtaSection;
