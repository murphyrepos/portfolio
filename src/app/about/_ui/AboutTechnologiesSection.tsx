'use client';

import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

type AboutTechnology = {
  name: string;
  category: string;
};

const technologyItemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const AboutTechnologiesSection = () => {
  const { t } = useTranslation('common', {
    keyPrefix: 'aboutPage.technologies',
  });
  const shouldReduceMotion = useReducedMotion();

  const technologiesRaw = t('items', { returnObjects: true });
  const technologies = Array.isArray(technologiesRaw)
    ? (technologiesRaw as AboutTechnology[])
    : [];

  return (
    <section className='bg-gray-50 py-20 lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <div className='mx-auto flex flex-col justify-center gap-2 text-center'>
          <h3 className='text-4xl leading-tight font-bold text-gray-900 lg:text-5xl'>
            {t('title')}
          </h3>
          <p className='mx-auto max-w-3xl text-xl text-gray-600 lg:text-xl'>
            {t('description')}
          </p>
        </div>

        <div className='mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {technologies.map((technology, index) => (
            <motion.article
              key={`${technology.name}-${index}`}
              variants={shouldReduceMotion ? undefined : technologyItemVariants}
              transition={shouldReduceMotion ? undefined : { duration: 0.42 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className={cn(
                'hover:border-primary/70 rounded-2xl border bg-white px-6 py-8 text-center hover:shadow-lg'
              )}
            >
              <h3 className='text-xl font-bold text-gray-900'>
                {technology.name}
              </h3>
              <p className='text-gray-500'>{technology.category}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutTechnologiesSection;
