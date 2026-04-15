import React from 'react';
import type { Metadata } from 'next';
import { Award, Heart, Target, Users } from 'lucide-react';
import Footer from '@/components/footer';
import { Skeleton } from '@/components/ui/skeleton';
import { PRODUCTION_URL } from '@/utils/helper';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about our story, values, and the technology expertise behind the digital solutions we deliver.',
  alternates: {
    canonical: `${PRODUCTION_URL}/about`,
  },
  openGraph: {
    title: 'Murphy Repos | About',
    description:
      'Learn about our story, values, and the technology expertise behind the digital solutions we deliver.',
    url: `${PRODUCTION_URL}/about`,
    siteName: 'Murphy Repos',
    type: 'website',
  },
};

const values = [
  {
    Icon: Target,
    title: 'Innovation',
    description:
      'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
  },
  {
    Icon: Users,
    title: 'Collaboration',
    description:
      'Working closely with our clients as partners to achieve shared success and growth.',
  },
  {
    Icon: Award,
    title: 'Excellence',
    description:
      'Commitment to the highest standards in every project we undertake.',
  },
  {
    Icon: Heart,
    title: 'Passion',
    description:
      'We love what we do, and it shows in the quality of our work and dedication to clients.',
  },
];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '8', label: 'Years Experience' },
  { number: '15', label: 'Team Members' },
];

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Figma', category: 'Design' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'GraphQL', category: 'API' },
  { name: 'MongoDB', category: 'Database', featured: true },
  { name: 'Firebase', category: 'Backend' },
];

const AboutPage = () => {
  return (
    <div className='bg-slate-100 pt-28'>
      <section id='about' className='py-20 lg:py-24'>
        <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl text-center'>
            <h1 className='text-5xl font-bold leading-tight text-slate-900 lg:text-7xl'>
              About Us
            </h1>
            <p className='mt-5 text-balance text-xl text-slate-600 lg:text-2xl'>
              We are a team of passionate creators dedicated to transforming
              ideas into exceptional digital experiences
            </p>
          </div>
        </div>
      </section>

      <section className='pb-20 lg:pb-24'>
        <div className='mx-auto grid w-full max-w-[1240px] items-center gap-10 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8'>
          <div>
            <h2 className='text-5xl font-bold text-slate-900 lg:text-6xl'>
              Our Story
            </h2>
            <div className='mt-6 space-y-5 text-xl leading-relaxed text-slate-600 lg:text-[2rem]'>
              <p>
                Founded in 2016, our agency started with a simple mission: to
                help businesses succeed in the digital age through innovative
                design and development.
              </p>
              <p>
                Over the years, we&apos;ve grown from a small team of three to a
                diverse group of talented professionals. We&apos;ve worked with
                startups, established brands, and everything in between,
                delivering solutions that drive real results.
              </p>
              <p>
                Today, we&apos;re proud to be a trusted partner for businesses
                looking to make their mark in the digital world.
              </p>
            </div>
          </div>

          <div>
            <Skeleton className='h-[360px] w-full rounded-3xl bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300 lg:h-[500px]' />
          </div>
        </div>
      </section>

      <section className='py-20 lg:py-24'>
        <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='text-5xl font-bold text-slate-900 lg:text-6xl'>
              Our Values
            </h2>
            <p className='mt-5 text-balance text-xl text-slate-600 lg:text-2xl'>
              Principles that guide everything we do
            </p>
          </div>

          <div className='mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {values.map((value) => (
              <article key={value.title} className='text-center'>
                <div className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white'>
                  <value.Icon size={30} />
                </div>
                <h3 className='text-4xl font-bold text-slate-900'>
                  {value.title}
                </h3>
                <p className='mt-4 text-balance text-xl text-slate-600'>
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-primary py-20 text-white lg:py-24'>
        <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
          <h2 className='text-center text-5xl font-bold lg:text-6xl'>
            By the Numbers
          </h2>

          <div className='mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4'>
            {stats.map((stat) => (
              <article key={stat.label} className='text-center'>
                <p className='text-6xl font-bold lg:text-7xl'>{stat.number}</p>
                <p className='mt-2 text-xl text-blue-100'>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 lg:py-24'>
        <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
          <div className='mx-auto max-w-5xl text-center'>
            <h2 className='text-5xl font-bold leading-tight text-slate-900 lg:text-6xl'>
              Technologies We Master
            </h2>
            <p className='mt-5 text-balance text-xl text-slate-600 lg:text-2xl'>
              Leveraging cutting-edge tools and frameworks to build exceptional
              solutions
            </p>
          </div>

          <div className='mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {technologies.map((technology) => (
              <article
                key={technology.name}
                className={`rounded-2xl border bg-slate-100 p-6 text-center ${
                  technology.featured
                    ? 'border-primary shadow-md'
                    : 'border-slate-200'
                }`}
              >
                <h3 className='text-4xl font-bold text-slate-900'>
                  {technology.name}
                </h3>
                <p className='mt-2 text-xl text-slate-500'>
                  {technology.category}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
