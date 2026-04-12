import React from 'react';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import {
  CheckCircle,
  Code2,
  Lightbulb,
  Rocket,
  Search,
} from 'lucide-react';
import Footer from '@/components/footer';
import { PRODUCTION_URL } from '@/utils/helper';

const workflowSteps = [
  {
    Icon: Search,
    title: 'Discovery & Research',
    description:
      'We start by understanding your business, goals, and target audience through comprehensive research and analysis.',
    duration: '1-2 weeks',
    tasks: [
      'Stakeholder interviews',
      'Market analysis',
      'Competitor research',
      'Requirements gathering',
    ],
  },
  {
    Icon: Lightbulb,
    title: 'Strategy & Planning',
    description:
      'Develop a detailed roadmap and strategy aligned with your objectives, including timelines and deliverables.',
    duration: '1-2 weeks',
    tasks: [
      'Project planning',
      'Technical architecture',
      'Design system creation',
      'Timeline development',
    ],
  },
  {
    Icon: Code2,
    title: 'Design & Development',
    description:
      'Our team brings your vision to life with stunning designs and robust development using cutting-edge technologies.',
    duration: '4-8 weeks',
    tasks: [
      'UI/UX design',
      'Prototype creation',
      'Frontend development',
      'Backend integration',
    ],
  },
  {
    Icon: CheckCircle,
    title: 'Testing & Refinement',
    description:
      'Rigorous quality assurance and testing to ensure everything works flawlessly across all devices and browsers.',
    duration: '1-2 weeks',
    tasks: ['Quality assurance', 'User testing', 'Performance optimization', 'Bug fixes'],
  },
  {
    Icon: Rocket,
    title: 'Launch & Support',
    description:
      'Successful deployment and ongoing support to ensure your project continues to perform at its best.',
    duration: 'Ongoing',
    tasks: [
      'Deployment',
      'Training & documentation',
      'Monitoring',
      'Continuous support',
    ],
  },
];

const WorkflowPage = () => {
  return (
    <>
      <Head>
        {generateNextSeo({
          title: 'Murphy Repos | Workflow',
          description:
            'A proven process that delivers exceptional results from discovery and planning through launch and ongoing support.',
          canonical: `${PRODUCTION_URL}/workflow`,
          openGraph: {
            url: `${PRODUCTION_URL}/workflow`,
            type: 'website',
            title: 'Murphy Repos | Workflow',
            description:
              'A proven process that delivers exceptional results from discovery and planning through launch and ongoing support.',
            siteName: 'Murphy Repos',
          },
        })}
      </Head>

      <div className='bg-slate-100 pt-28'>
        <section className='pb-20 pt-8 lg:pb-24'>
          <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl text-center'>
              <h1 className='text-5xl font-bold leading-tight text-slate-900 lg:text-7xl'>
                Our Workflow
              </h1>
              <p className='mt-5 text-balance text-xl text-slate-600 lg:text-2xl'>
                A proven process that delivers exceptional results every time
              </p>
            </div>
          </div>
        </section>

        <section className='pb-20 lg:pb-24'>
          <div className='mx-auto w-full max-w-[980px] px-6 lg:px-8'>
            <div className='relative'>
              <div className='absolute bottom-0 left-8 top-0 hidden w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 md:block' />

              <div className='space-y-14 lg:space-y-16'>
                {workflowSteps.map((step, index) => (
                  <article key={step.title} className='relative'>
                    <div className='flex flex-col gap-6 md:flex-row md:gap-10'>
                      <div className='shrink-0'>
                        <div className='relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg'>
                          <step.Icon size={32} className='text-white' />
                          <div className='absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-white'>
                            <span className='text-sm font-bold text-primary'>
                              {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className='flex-1'>
                        <div className='mb-4 flex flex-wrap items-start justify-between gap-4'>
                          <h2 className='text-4xl font-bold leading-tight text-slate-900 lg:text-5xl'>
                            {step.title}
                          </h2>
                          <span className='rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-primary'>
                            {step.duration}
                          </span>
                        </div>

                        <p className='text-balance text-xl text-slate-600 lg:text-[1.75rem]'>
                          {step.description}
                        </p>

                        <ul className='mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2'>
                          {step.tasks.map((task) => (
                            <li
                              key={task}
                              className='flex items-center gap-2 text-lg text-slate-700 lg:text-2xl'
                            >
                              <CheckCircle size={18} className='shrink-0 text-primary' />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className='bg-slate-100 pb-20 pt-4 lg:pb-24'>
          <div className='mx-auto w-full max-w-[920px] px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-4xl font-bold text-slate-900 lg:text-5xl'>
                Transparent &amp; Collaborative
              </h2>
              <p className='mx-auto mt-5 max-w-3xl text-balance text-xl text-slate-600 lg:text-2xl'>
                We believe in keeping you informed every step of the way. Regular
                updates, open communication, and your feedback drive our process.
              </p>
            </div>

            <div className='mt-10 grid gap-4 sm:grid-cols-3'>
              <article className='rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm'>
                <p className='text-5xl font-bold text-primary'>100%</p>
                <p className='mt-2 text-lg text-slate-600'>Transparency</p>
              </article>
              <article className='rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm'>
                <p className='text-5xl font-bold text-primary'>24/7</p>
                <p className='mt-2 text-lg text-slate-600'>Communication</p>
              </article>
              <article className='rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm'>
                <p className='text-5xl font-bold text-primary'>&lt;48h</p>
                <p className='mt-2 text-lg text-slate-600'>Response Time</p>
              </article>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WorkflowPage;
