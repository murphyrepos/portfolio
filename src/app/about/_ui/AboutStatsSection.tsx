'use client';

import { Container } from '@/components/container';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const aboutStatKeys = [
  'projectsCompleted',
  'happyClients',
  'yearsExperience',
  'teamMembers',
] as const;

type AboutStatKey = (typeof aboutStatKeys)[number];
type AboutStatContent = {
  number: string;
  label: string;
};
type AboutStatsMap = Record<AboutStatKey, AboutStatContent>;

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const AboutStatsSection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'aboutPage.stats' });
  const shouldReduceMotion = useReducedMotion();

  const statItemsRaw = t('items', { returnObjects: true });
  const statItems = (statItemsRaw ?? {}) as AboutStatsMap;

  return (
    <section className='bg-primary py-20 text-white lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <motion.h2
          className='text-center text-xl font-bold lg:text-4xl'
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.45 }}
        >
          {t('title')}
        </motion.h2>
        <motion.div
          className='mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4'
          variants={statsContainerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {aboutStatKeys.map((statKey) => {
            const stat = statItems[statKey];
            if (!stat) {
              return null;
            }
            return (
              <motion.article
                key={statKey}
                className='text-center'
                variants={shouldReduceMotion ? undefined : statItemVariants}
                transition={shouldReduceMotion ? undefined : { duration: 0.4 }}
              >
                <p className='text-2xl font-bold lg:text-6xl'>{stat.number}</p>
                <p className='text-primary-100 mt-2'>{stat.label}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutStatsSection;
