'use client';

import { Container } from '@/components/container';
import { CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const serviceValues: string[] = [
  'expertTeam',
  'qualityFocused',
  'onTimeDelivery',
];

const serviceCardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const serviceCardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const Services = () => {
  const { t } = useTranslation('common', { keyPrefix: 'home.services' });
  return (
    <Container className='flex flex-col gap-16 py-24'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container className='flex w-full flex-col gap-2 text-center'>
          <h2 className='text-4xl font-bold text-gray-900 lg:text-5xl'>
            {t('title')}
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-gray-600'>
            {t('description')}
          </p>
        </Container>
      </motion.div>
      <div>
        <ServiceCards services={serviceValues} />
      </div>
    </Container>
  );
};

export default Services;

const ServiceCards = ({ services }: { services: string[] }) => {
  const { t } = useTranslation('common', {
    keyPrefix: 'home.services.valueProps',
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={serviceCardsContainerVariants}
    >
      <Container className='flex flex-col justify-between gap-10 md:flex-row'>
        {services.map((service) => (
          <motion.div
            key={service}
            variants={shouldReduceMotion ? undefined : serviceCardVariants}
            transition={shouldReduceMotion ? undefined : { duration: 0.45 }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -8,
                    scale: 1.02,
                    transition: {
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                    },
                  }
            }
            className='h-full'
          >
            <Container className='group hover:bg-primary-100/50 flex h-full flex-col gap-8 rounded-2xl bg-gray-50 p-8 transition-colors'>
              <CheckCircle2 className='text-primary h-12 w-12 transition-all delay-100 group-hover:scale-110 group-hover:-rotate-6' />
              <Container className='flex flex-col gap-2 p-0'>
                <h3 className='text-2xl font-bold text-gray-900'>
                  {t(`${service}.title`)}
                </h3>
                <p className='text-gray-600'>{t(`${service}.description`)}</p>
              </Container>
            </Container>
          </motion.div>
        ))}
      </Container>
    </motion.div>
  );
};
