'use client';

import { Container } from '@/components/container';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const ContactCtaSection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'contactPage.cta' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className='bg-gray-50 py-20 lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <motion.div
          className='mx-auto max-w-6xl text-center'
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
        >
          <h2 className='text-xl font-bold text-gray-900 lg:text-4xl'>
            {t('title')}
          </h2>
          <p className='mt-3 text-balance text-gray-600 lg:text-lg'>
            {t('description')}
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactCtaSection;
