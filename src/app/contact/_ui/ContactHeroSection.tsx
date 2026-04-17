'use client';

import { Container } from '@/components/container';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const ContactHeroSection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'contactPage.hero' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className='bg-gray-50 py-24 pt-40'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <motion.div
          className='mx-auto max-w-4xl text-center'
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
        >
          <h1 className='text-5xl leading-tight font-bold text-gray-900 lg:text-7xl'>
            {t('title')}
          </h1>
          <p className='mx-auto mt-5 max-w-4xl text-xl text-balance text-gray-600 lg:text-2xl'>
            {t('description')}
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactHeroSection;
