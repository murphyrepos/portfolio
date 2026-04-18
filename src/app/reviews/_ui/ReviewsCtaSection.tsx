'use client';

import { Container } from '@/components/container';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const ReviewsCtaSection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'reviewsPage.cta' });

  return (
    <section className='py-20 lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <div className='mx-auto flex max-w-4xl flex-col gap-4 text-center'>
          <h2 className='text-xl font-bold text-gray-900 lg:text-4xl'>
            {t('title')}
          </h2>
          <p className='mt-3 text-balance text-gray-600 lg:text-xl'>
            {t('description')}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='mt-12 text-center'
          >
            <Link
              href='/contact'
              className='group bg-primary hover:bg-primary/70 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white transition-colors'
            >
              {t('button')}
              <ArrowRight
                size={18}
                className='transition-transform group-hover:translate-x-1'
              />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewsCtaSection;
