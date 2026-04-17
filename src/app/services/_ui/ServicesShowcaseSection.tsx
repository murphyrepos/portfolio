'use client';

import Link from 'next/link';
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
import {
  mobDevConstants,
  uiDevConstants,
  webDevConstants,
} from '@/utils/constants/services.constant';
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
  href: string;
  Icon: LucideIcon;
}

const servicesShowcase: ServicesShowcaseItem[] = [
  {
    key: 'webDevelopment',
    href: `/services/${webDevConstants.key}`,
    Icon: Globe,
  },
  {
    key: 'uiUxDesign',
    href: `/services/${uiDevConstants.key}`,
    Icon: Palette,
  },
  {
    key: 'mobileApps',
    href: `/services/${mobDevConstants.key}`,
    Icon: Smartphone,
  },
  {
    key: 'customSoftware',
    href: '/services/custom-solutions',
    Icon: FolderCode,
  },
  {
    key: 'digitalMarketing',
    href: '/contact',
    Icon: ChartCandlestick,
  },
  {
    key: 'brandStrategy',
    href: '/contact',
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
  const { t } = useTranslation('common', {
    keyPrefix: 'servicesPage.showcase',
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className='pt-16 pb-20 lg:pb-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <motion.div
          className='grid gap-8 lg:grid-cols-3'
          variants={showcaseCardsContainerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {servicesShowcase.map((serviceItem) => (
            <motion.div
              key={serviceItem.key}
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
              <Link href={serviceItem.href} className='group block h-full'>
                <Card className='hover:border-primary h-full rounded-2xl border border-gray-200 p-8 shadow-none transition-colors hover:shadow-lg'>
                  <div className='bg-primary mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white'>
                    <serviceItem.Icon className='h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900'>
                    {t(`items.${serviceItem.key}.title`)}
                  </h2>
                  <p className='mt-4 text-base leading-relaxed text-gray-600'>
                    {t(`items.${serviceItem.key}.description`)}
                  </p>
                  <ul className='mt-6 space-y-3'>
                    {(
                      t(`items.${serviceItem.key}.points`, {
                        returnObjects: true,
                      }) as string[]
                    ).map((pointItem) => (
                      <li
                        key={pointItem}
                        className='before:bg-primary-500 relative pl-5 text-base text-gray-700 before:absolute before:top-[0.45rem] before:left-0 before:h-2 before:w-2 before:rounded-full'
                      >
                        {pointItem}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesShowcaseSection;
