'use client';

import Link from 'next/link';
import { Container } from '@/components/container';
import { useTranslation } from 'react-i18next';

const ServicesCtaSection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'servicesPage.cta' });

  return (
    <section className='w-full bg-gray-900'>
      <Container className='max-w-7xl bg-gray-900 px-6 lg:px-12'>
        <div className='px-8 py-14 text-center text-white lg:px-16'>
          <h2 className='text-4xl leading-tight font-bold lg:text-5xl'>
            {t('title')}
          </h2>
          <p className='mx-auto mt-4 max-w-3xl text-lg text-blue-50 lg:text-xl'>
            {t('description')}
          </p>
          <div className='mt-8'>
            <Link
              href='/contact'
              className='bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-xl px-8 py-3 text-lg font-semibold text-white transition-colors'
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesCtaSection;
