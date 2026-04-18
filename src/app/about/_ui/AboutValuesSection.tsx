'use client';

import { Container } from '@/components/container';
import { Award, Heart, Target, Users, type LucideIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const aboutValueConfig = [
  { key: 'innovation', Icon: Target },
  { key: 'collaboration', Icon: Users },
  { key: 'excellence', Icon: Award },
  { key: 'passion', Icon: Heart },
] as const;

type AboutValueKey = (typeof aboutValueConfig)[number]['key'];
type AboutValueContent = {
  title: string;
  description: string;
};
type AboutValuesMap = Record<AboutValueKey, AboutValueContent>;

type AboutValueCardProps = {
  Icon: LucideIcon;
  item: AboutValueContent;
  shouldReduceMotion: boolean;
};

const valuesContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const valueCardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const AboutValuesSection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'aboutPage.values' });
  const shouldReduceMotion = useReducedMotion();

  const valueItemsRaw = t('items', { returnObjects: true });
  const valueItems = (valueItemsRaw ?? {}) as AboutValuesMap;

  return (
    <section className='bg-gray-50 py-20 lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto flex flex-col justify-center gap-2'>
          <h3 className='text-center text-4xl leading-tight font-bold text-gray-900 lg:text-5xl'>
            {t('title')}
          </h3>
          <p className='mx-auto max-w-3xl text-xl text-gray-600 lg:text-xl'>
            {t('description')}
          </p>
        </div>

        <motion.div
          className='mx-auto mt-20 grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4'
          variants={valuesContainerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {aboutValueConfig.map(({ key, Icon }) => {
            const valueItem = valueItems[key];

            if (!valueItem) {
              return null;
            }

            return (
              <AboutValueCard
                key={key}
                Icon={Icon}
                item={valueItem}
                shouldReduceMotion={Boolean(shouldReduceMotion)}
              />
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

function AboutValueCard({
  Icon,
  item,
  shouldReduceMotion,
}: AboutValueCardProps) {
  return (
    <motion.article
      className='text-center'
      variants={shouldReduceMotion ? undefined : valueCardVariants}
      transition={shouldReduceMotion ? undefined : { duration: 0.45 }}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
    >
      <div className='bg-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-white'>
        <Icon size={28} />
      </div>
      <h3 className='text-xl font-bold text-gray-900'>{item.title}</h3>
      <p className='mt-2 text-balance text-gray-600'>{item.description}</p>
    </motion.article>
  );
}

export default AboutValuesSection;
