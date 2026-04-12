import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { details } from '@/utils/constants/portfolio.content';

const categoryByProjectTitle: Record<string, string> = {
  Cureforu: 'Mobile Development',
  Maahdhaa: 'Web Development',
  'Nala Prep': 'Education Platform',
  Savora: 'Hospitality Tech',
  Strike: 'FinTech Platform',
};

const WorkFlow = () => {
  const featuredProjects = details.slice(0, 4).map((projectItem) => ({
    title: projectItem.title,
    category:
      categoryByProjectTitle[projectItem.title] ??
      (projectItem.isMobile ? 'Mobile Development' : 'Web Development'),
  }));

  return (
    <section id='workflow' className='scroll-mt-28 bg-slate-100 py-24'>
      <div id='reviews' className='scroll-mt-28' />

      <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl font-bold leading-tight text-slate-900 lg:text-5xl'>
            Featured Projects
          </h2>
          <p className='mt-5 text-balance text-xl text-slate-600'>
            Explore our latest work and success stories
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
                <h3 className='mt-1 text-2xl font-bold leading-tight text-white md:text-4xl'>
                  {projectItem.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Link
            href='/#contact'
            className='inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-600'
          >
            Start Your Project
            <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
