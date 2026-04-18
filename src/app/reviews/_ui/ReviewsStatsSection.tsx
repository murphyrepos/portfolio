'use client';

import { Container } from '@/components/container';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

type ReviewStat = {
  number: string;
  suffix: string;
  label: string;
};

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const statsItemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const ReviewsStatsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation('common', { keyPrefix: 'reviewsPage.stats' });
  const reviewStatsRaw = t('items', { returnObjects: true });
  const reviewStats = Array.isArray(reviewStatsRaw)
    ? (reviewStatsRaw as ReviewStat[])
    : [];

  return (
    <section className='bg-primary py-20 text-white lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <motion.div
          className='mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4'
          variants={statsContainerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {reviewStats.map((stat) => (
            <motion.article
              key={stat.label}
              className='text-center'
              variants={shouldReduceMotion ? undefined : statsItemVariants}
              transition={shouldReduceMotion ? undefined : { duration: 0.4 }}
            >
              <p className='text-2xl leading-none font-bold lg:text-6xl'>
                {stat.number}
                <span className='ml-1 text-xl lg:text-3xl'>{stat.suffix}</span>
              </p>
              <p className='text-primary-100 mt-2'>{stat.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ReviewsStatsSection;
