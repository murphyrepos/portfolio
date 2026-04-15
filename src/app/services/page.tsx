import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Palette, Smartphone } from 'lucide-react';
import Footer from '@/components/footer';
import { PRODUCTION_URL } from '@/utils/helper';
import {
  mobDevConstants,
  uiDevConstants,
  webDevConstants,
} from '@/utils/constants/services.constant';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive digital solutions tailored to your business needs, from web and mobile engineering to UI/UX design.',
  alternates: {
    canonical: `${PRODUCTION_URL}/services`,
  },
  openGraph: {
    title: 'Murphy Repos | Our Services',
    description:
      'Comprehensive digital solutions tailored to your business needs, from web and mobile engineering to UI/UX design.',
    url: `${PRODUCTION_URL}/services`,
    siteName: 'Murphy Repos',
    type: 'website',
  },
};

const servicesShowcase = [
  {
    href: `/services/${webDevConstants.key}`,
    title: webDevConstants.testimonialConstants.title,
    description:
      'Custom web applications built with modern frameworks and best practices for optimal performance and scalability.',
    points: ['Responsive Design', 'Progressive Web Apps', 'Server Rendered Apps'],
    Icon: Globe,
  },
  {
    href: `/services/${uiDevConstants.key}`,
    title: uiDevConstants.testimonialConstants.title,
    description:
      'Beautiful, intuitive interfaces that enhance user experience and drive engagement across all platforms.',
    points: ['User Research', 'Wireframing & Prototyping', 'Responsive Design'],
    Icon: Palette,
  },
  {
    href: `/services/${mobDevConstants.key}`,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications that deliver exceptional experiences on iOS and Android.',
    points: ['iOS Development', 'Android Development', 'Cross-Platform Apps'],
    Icon: Smartphone,
  },
];

const ServicesPage = () => {
  return (
    <div className='bg-slate-100 pt-28'>
        <section id='services' className='py-20 lg:py-24'>
          <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl text-center'>
              <h1 className='text-5xl font-bold leading-tight text-slate-900 lg:text-7xl'>
                Our Services
              </h1>
              <p className='mt-5 text-balance text-xl text-slate-600 lg:text-2xl'>
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>

            <div className='mt-16 grid gap-6 lg:grid-cols-3'>
              {servicesShowcase.map((serviceItem, index) => (
                <Link
                  href={serviceItem.href}
                  key={serviceItem.href}
                  className='block'
                >
                  <article
                    className={`h-full rounded-3xl border bg-slate-100 p-8 transition-colors hover:bg-white ${
                      index === 1 ? 'border-primary' : 'border-slate-200'
                    }`}
                  >
                    <div className='mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white'>
                      <serviceItem.Icon size={30} />
                    </div>

                    <h2 className='text-4xl font-bold text-slate-900'>
                      {serviceItem.title}
                    </h2>

                    <p className='mt-5 text-balance text-xl leading-relaxed text-slate-600'>
                      {serviceItem.description}
                    </p>

                    <ul className='mt-6 space-y-3'>
                      {serviceItem.points.map((pointItem) => (
                        <li
                          key={pointItem}
                          className='relative pl-5 text-xl text-slate-700 before:absolute before:left-0 before:top-[0.65rem] before:h-2 before:w-2 before:rounded-full before:bg-primary'
                        >
                          {pointItem}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className='bg-[#081531] py-16 text-white lg:py-20'>
          <div className='mx-auto w-full max-w-[1240px] px-6 text-center lg:px-8'>
            <h2 className='text-5xl font-bold leading-tight lg:text-6xl'>
              Ready to Start Your Project?
            </h2>
            <p className='mx-auto mt-5 max-w-3xl text-balance text-xl text-slate-300 lg:text-2xl'>
              Let&apos;s discuss how we can help bring your vision to life
            </p>
            <div className='mt-10'>
              <Link
                href='/#contact'
                className='inline-flex items-center justify-center rounded-xl bg-primary px-10 py-4 text-xl font-semibold text-white transition-colors hover:bg-blue-600'
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
