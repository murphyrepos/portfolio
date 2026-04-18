'use client';

import { Container } from '@/components/container';
import { useTranslation } from 'react-i18next';

const WorkflowHeroSection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'workflow' });

  return (
    <section className='bg-linear-to-br from-blue-100 via-white to-gray-50 py-24 pt-40'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <div className='mx-auto max-w-4xl text-center'>
          <h1 className='text-5xl leading-[1.05] font-bold text-balance text-gray-900 lg:text-7xl'>
            {t('title')}
          </h1>
          <p className='mx-auto mt-5 max-w-3xl text-xl text-gray-600 lg:text-2xl'>
            {t('description')}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default WorkflowHeroSection;
