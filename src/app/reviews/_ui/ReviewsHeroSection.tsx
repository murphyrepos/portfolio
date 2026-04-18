'use client';

import { Container } from '@/components/container';
import { useTranslation } from 'react-i18next';

const ReviewsHeroSection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'reviewsPage.hero' });

  return (
    <section className='bg-linear-to-br from-blue-100 via-white to-gray-50 py-20 pt-40'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <div className='mx-auto flex max-w-4xl flex-col gap-4 text-center'>
          <h1 className='mx-auto max-w-xl text-5xl leading-[1.05] font-bold text-gray-900 lg:text-7xl'>
            {t('title')}
          </h1>
          <p className='text-xl text-gray-600'>{t('description')}</p>
        </div>
      </Container>
    </section>
  );
};

export default ReviewsHeroSection;
