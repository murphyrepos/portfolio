'use client';

import { Container } from '@/components/container';
import { details } from '@/utils/constants/portfolio.content';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const toStringList = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === 'string');
};

const Projects = () => {
  const { t } = useTranslation('common', { keyPrefix: 'home.projects' });

  return (
    <section className='bg-gray-50 py-24'>
      <Container className='px-6 lg:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <h2 className='mb-4 text-4xl font-bold text-gray-900 lg:text-5xl'>
            {t('title')}
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-gray-600'>
            {t('description')}
          </p>
        </motion.div>

        <div className='space-y-10'>
          {details.map((project, index) => (
            <ProjectCard key={project.key} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-12 text-center'
        >
          <Link
            href='/contact'
            className='group bg-primary hover:bg-primary/70 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white transition-colors'
          >
            {t('cta')}
            <ArrowRight
              size={18}
              className='transition-transform group-hover:translate-x-1'
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof details)[number];
  index: number;
}) => {
  const { t } = useTranslation('common', { keyPrefix: 'home.projects' });
  const shouldReduceMotion = useReducedMotion();
  const roleLine = project.role;
  const technologiesLine = toStringList(
    t(`items.${project.key}.technologies`, {
      returnObjects: true,
    })
  ).join(' | ');

  return (
    <motion.div
      key={project.key}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <article
        className={`overflow-hidden rounded-[2.25rem] border border-gray-200/70 p-6 md:p-10 ${project.tones.surface}`}
      >
        <div className='grid items-center gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:gap-12'>
          <div className='space-y-6'>
            <p className='text-primary-700 text-sm font-semibold tracking-[0.2em] uppercase'>
              {t(`items.${project.key}.category`)}
            </p>
            <h3 className='text-balance text-4xl font-bold text-slate-900 md:text-5xl'>
              {t(`items.${project.key}.title`)}
            </h3>
            <p className='text-base leading-relaxed text-slate-600 md:text-lg'>
              {t(`items.${project.key}.description`)}
            </p>
            <div className='space-y-2 border-t border-slate-300/70 pt-5'>
              <p className='text-sm text-slate-500'>{technologiesLine}</p>
              <p className='text-sm text-slate-600'>{roleLine}</p>
            </div>
          </div>

          <motion.div
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -8,
                    transition: {
                      type: 'spring',
                      stiffness: 220,
                      damping: 20,
                    },
                  }
            }
            className={`overflow-hidden rounded-[1.6rem] border border-slate-200/80 p-4 shadow-[0_28px_60px_-32px_rgba(15,23,42,0.35)] ${project.tones.frame}`}
          >
            <div className='mb-4 flex items-center gap-1.5'>
              <span className='h-2.5 w-2.5 rounded-full bg-rose-300' />
              <span className='h-2.5 w-2.5 rounded-full bg-amber-300' />
              <span className='h-2.5 w-2.5 rounded-full bg-emerald-300' />
            </div>
            <div className='relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-50 p-2'>
              <Image
                src={project.image}
                alt={t(`items.${project.key}.title`)}
                fill
                className='object-contain object-center'
                style={
                  project.imageScale ? { transform: `scale(${project.imageScale})` } : undefined
                }
              />
            </div>
          </motion.div>
        </div>
      </article>
    </motion.div>
  );
};
