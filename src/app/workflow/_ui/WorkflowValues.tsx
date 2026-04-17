'use client';

import { Container } from '@/components/container';
import { Card } from '@/components/ui/card';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const workflowValueKeys = [
  'transparency',
  'communication',
  'responseTime',
] as const;

type WorkflowValueKey = (typeof workflowValueKeys)[number];
type WorkflowValueItem = {
  value: string;
  label: string;
};
type WorkflowValuesMap = Record<WorkflowValueKey, WorkflowValueItem>;

const valuesContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const valueCardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function WorkflowValues() {
  const { t } = useTranslation('common', { keyPrefix: 'workflow.values' });
  const shouldReduceMotion = useReducedMotion();
  const valueItems = t('items', { returnObjects: true }) as WorkflowValuesMap;

  return (
    <section className='bg-gray-50 py-20 lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <motion.div
          className='mx-auto max-w-4xl text-center'
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
        >
          <h3 className='text-4xl leading-[1.05] font-bold text-balance text-gray-900'>
            {t('title')}
          </h3>
          <p className='mx-auto mt-5 max-w-3xl text-lg text-gray-600'>
            {t('description')}
          </p>
        </motion.div>
        <Container className='mt-6 max-w-4xl'>
          <motion.div
            className='mt-8 grid gap-4 md:grid-cols-3 md:gap-6'
            variants={valuesContainerVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.15 }}
          >
            {workflowValueKeys.map((valueKey) => {
              const valueItem = valueItems[valueKey];

              if (!valueItem) {
                return null;
              }

              return (
                <motion.div
                  key={valueKey}
                  variants={shouldReduceMotion ? undefined : valueCardVariants}
                  transition={
                    shouldReduceMotion ? undefined : { duration: 0.45 }
                  }
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }
                  }
                >
                  <Card className='mx-auto flex h-full flex-col items-center justify-center gap-3 border-none px-18 py-6 text-center shadow-sm'>
                    <h3 className='text-primary text-3xl font-bold'>
                      {valueItem.value}
                    </h3>
                    <p className='text-xl text-gray-600'>{valueItem.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </Container>
    </section>
  );
}

export default WorkflowValues;
