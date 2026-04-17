'use client';

import { Container } from '@/components/container';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  Lightbulb,
  Code2,
  CheckCircle,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';

type WorkflowStepContent = {
  title: string;
  description: string;
  duration: string;
  tasks: string[];
};

const workflowStepConfig = [
  { key: 'discovery', Icon: Search },
  { key: 'strategy', Icon: Lightbulb },
  { key: 'designDevelopment', Icon: Code2 },
  { key: 'testingRefinement', Icon: CheckCircle },
  { key: 'launchSupport', Icon: Rocket },
] as const;

type WorkflowStepKey = (typeof workflowStepConfig)[number]['key'];
type WorkflowChartSteps = Record<WorkflowStepKey, WorkflowStepContent>;

type WorkflowStepItemProps = {
  Icon: LucideIcon;
  index: number;
  shouldReduceMotion: boolean;
  step: WorkflowStepContent;
};

const chartContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const chartStepVariants = {
  hidden: { opacity: 0, x: -36, scale: 0.99 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

function Workflow() {
  const { t } = useTranslation('common', { keyPrefix: 'workflow.chart' });
  const shouldReduceMotion = useReducedMotion();
  const workflowSteps = t('steps', {
    returnObjects: true,
  }) as WorkflowChartSteps;

  return (
    <section className='py-20 lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <Container className='relative'>
          <motion.div
            className='relative mx-auto max-w-5xl space-y-12 px-3 lg:space-y-16'
            variants={chartContainerVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div
              aria-hidden
              className='absolute top-0 bottom-0 left-11 hidden w-0.5 bg-linear-to-b from-blue-500 via-blue-400 to-blue-300 md:block'
            />
            {workflowStepConfig.map(({ key, Icon }, index) => {
              const step = workflowSteps[key];

              if (!step) {
                return null;
              }

              return (
                <WorkflowStepItem
                  key={key}
                  Icon={Icon}
                  index={index}
                  shouldReduceMotion={Boolean(shouldReduceMotion)}
                  step={step}
                />
              );
            })}
          </motion.div>
        </Container>
      </Container>
    </section>
  );
}

export default Workflow;

function WorkflowStepItem({
  Icon,
  index,
  shouldReduceMotion,
  step,
}: WorkflowStepItemProps) {
  const { title, duration, description, tasks } = step;

  return (
    <motion.article
      className='relative'
      variants={shouldReduceMotion ? undefined : chartStepVariants}
      transition={
        shouldReduceMotion ? undefined : { duration: 0.45, ease: 'easeOut' }
      }
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
    >
      <div className='flex flex-col gap-8 md:flex-row md:gap-12'>
        <div className='shrink-0'>
          <div className='bg-primary relative flex h-16 w-16 items-center justify-center rounded-2xl drop-shadow-2xl'>
            <Icon size={28} className='text-white' />
            <div className='border-primary absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white'>
              <span className='text-primary text-sm font-medium'>
                {index + 1}
              </span>
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <div className='mb-2 flex flex-wrap items-start justify-between gap-2'>
            <h2 className='text-xl leading-tight font-bold text-gray-900 lg:text-3xl'>
              {title}
            </h2>
            <Badge className='text-primary bg-primary-100 hover:bg-primary-100/80 text-sm font-normal'>
              {duration}
            </Badge>
          </div>
          <p className='text-balance text-gray-600'>{description}</p>
          <ul className='mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2'>
            {tasks.map((task, taskIndex) => (
              <li
                key={`${title}-${task}-${taskIndex}`}
                className='flex items-center gap-2 text-gray-600'
              >
                <CheckCircle size={18} className='text-primary shrink-0' />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
