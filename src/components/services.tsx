import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const valueProps = [
  {
    title: 'Expert Team',
    description: 'Seasoned professionals with years of industry experience',
  },
  {
    title: 'Quality Focused',
    description: 'We never compromise on the quality of our deliverables',
  },
  {
    title: 'On-Time Delivery',
    description: 'Meeting deadlines is our commitment to your success',
  },
];

const Services = () => {
  return (
    <section id='services' className='scroll-mt-28 bg-white py-24'>
      <div id='about' className='scroll-mt-28' />

      <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl font-bold leading-tight text-slate-900 lg:text-5xl'>
            Why Choose Us
          </h2>
          <p className='mt-5 text-balance text-xl text-slate-600'>
            We deliver exceptional results through innovative solutions
          </p>
        </div>

        <div className='mt-14 grid gap-6 md:grid-cols-3'>
          {valueProps.map((item) => (
            <article
              key={item.title}
              className='rounded-3xl bg-slate-100 p-8 transition-colors hover:bg-blue-50'
            >
              <CheckCircle2 className='mb-6 h-12 w-12 text-primary' />
              <h3 className='text-2xl font-bold text-slate-900'>{item.title}</h3>
              <p className='mt-4 text-balance text-lg text-slate-600'>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
