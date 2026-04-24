'use client';

import {
  ChartCandlestick,
  FolderCode,
  Globe,
  Palette,
  Smartphone,
  Target,
  type LucideIcon,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '@/components/container';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';

type ServiceItemKey =
  | 'webDevelopment'
  | 'uiUxDesign'
  | 'mobileApps'
  | 'customSoftware'
  | 'digitalMarketing'
  | 'brandStrategy';

interface ServicesShowcaseItem {
  key: ServiceItemKey;
  Icon: LucideIcon;
}

const toStringList = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === 'string');
};

const servicesShowcase: ServicesShowcaseItem[] = [
  {
    key: 'webDevelopment',
    Icon: Globe,
  },
  {
    key: 'uiUxDesign',
    Icon: Palette,
  },
  {
    key: 'mobileApps',
    Icon: Smartphone,
  },
  {
    key: 'customSoftware',
    Icon: FolderCode,
  },
  {
    key: 'digitalMarketing',
    Icon: ChartCandlestick,
  },
  {
    key: 'brandStrategy',
    Icon: Target,
  },
];

const showcaseCardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const showcaseCardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const ServicesShowcaseSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className='py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <motion.div
          className='grid gap-6 lg:grid-cols-3'
          variants={showcaseCardsContainerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {servicesShowcase.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesShowcaseSection;

const ServiceCard = ({ item }: { item: ServicesShowcaseItem }) => {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation('common', {
    keyPrefix: 'servicesPage.showcase.items',
  });
  const points = toStringList(
    t(`${item.key}.points`, {
      returnObjects: true,
    })
  );

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : showcaseCardVariants}
      transition={shouldReduceMotion ? undefined : { duration: 0.45 }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -10,
              scale: 1.01,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 22,
              },
            }
      }
    >
      <Card className='hover:border-primary flex h-full flex-col rounded-2xl p-8 transition-shadow hover:shadow-lg'>
        <div className='bg-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white'>
          <item.Icon className='h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6' />
        </div>
        <h2 className='text-2xl font-bold text-gray-900'>
          {t(`${item.key}.title`)}
        </h2>
        <p className='mt-4 text-base leading-relaxed text-gray-600'>
          {t(`${item.key}.description`)}
        </p>
        <ul className='mt-6 space-y-3'>
          {points.map((pointItem) => (
            <li
              key={pointItem}
              className='before:bg-primary-500 relative pl-5 text-base text-gray-700 before:absolute before:top-[0.45rem] before:left-0 before:h-2 before:w-2 before:rounded-full'
            >
              {pointItem}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
};
