'use client';

import { Container } from '@/components/container';
import { useTranslation } from 'react-i18next';

const ContactCtaSection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'contactPage.cta' });

  return (
    <section className='bg-gray-50 py-20 lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <div className='mx-auto flex max-w-4xl flex-col gap-4 text-center'>
          <h2 className='text-xl font-bold text-gray-900 lg:text-4xl'>
            {t('title')}
          </h2>
          <p className='mt-3 text-balance text-gray-600 lg:text-xl'>
            {t('description')}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactCtaSection;
