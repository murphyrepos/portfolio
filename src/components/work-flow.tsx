'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/components/ui/skeleton';
import { details } from '@/utils/constants/portfolio.content';

const categoryByProjectTitleKey: Record<string, string> = {
  Cureforu: 'workflow.categories.cureforu',
  Maahdhaa: 'workflow.categories.maahdhaa',
  'Nala Prep': 'workflow.categories.nalaPrep',
  Savora: 'workflow.categories.savora',
  Strike: 'workflow.categories.strike',
};

const WorkFlow = () => {
  const { t } = useTranslation('common');

  const featuredProjects = details.slice(0, 4).map((projectItem) => ({
    title: projectItem.title,
    category: categoryByProjectTitleKey[projectItem.title]
      ? t(categoryByProjectTitleKey[projectItem.title])
      : projectItem.isMobile
        ? t('workflow.categories.defaultMobile')
        : t('workflow.categories.defaultWeb'),
  }));

  return (
    <section id='workflow' className='scroll-mt-28 bg-slate-100 py-24'>
      <div id='reviews' className='scroll-mt-28' />

      <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl leading-tight font-bold text-slate-900 lg:text-5xl'>
            {t('workflow.title')}
          </h2>
          <p className='mt-5 text-xl text-balance text-slate-600'>
            {t('workflow.description')}
          </p>
        </div>

        <div className='mt-14 grid gap-6 md:grid-cols-2'>
          {featuredProjects.map((projectItem) => (
            <article
              key={projectItem.title}
              className='group relative overflow-hidden rounded-3xl'
            >
              <Skeleton className='h-[270px] w-full rounded-3xl bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300 md:h-[320px]' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent' />
              <div className='absolute inset-x-0 bottom-0 p-6 md:p-8'>
                <p className='text-base font-medium text-blue-300'>
                  {projectItem.category}
                </p>
                <h3 className='mt-1 text-2xl leading-tight font-bold text-white md:text-4xl'>
                  {projectItem.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Link
            href='/contact'
            className='bg-primary inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-600'
          >
            {t('workflow.cta')}
            <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
