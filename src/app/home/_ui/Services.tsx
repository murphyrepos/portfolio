'use client';

import { Container } from '@/components/container';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const serviceValues: string[] = [
  'expertTeam',
  'qualityFocused',
  'onTimeDelivery',
];

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
          <h1 className='text-6xl font-bold text-gray-900'>{t('title')}</h1>
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Container className='flex flex-col justify-between gap-10 md:flex-row'>
        {services.map((service) => (
          <Container
            key={service}
            className='group hover:bg-primary-100/50 flex flex-col gap-8 rounded-2xl bg-gray-50 p-8 transition-colors'
          >
            <CheckCircle2 className='text-primary-500 h-12 w-12 transition-all delay-100 group-hover:scale-110' />
            <Container className='flex flex-col gap-2 p-0'>
              <h3 className='text-2xl font-bold text-gray-900'>
                {t(`${service}.title`)}
              </h3>
              <p className='text-gray-600'>{t(`${service}.description`)}</p>
            </Container>
          </Container>
        ))}
      </Container>
    </motion.div>
  );
};
