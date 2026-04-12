import React from 'react';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Globe,
  Palette,
  Smartphone,
} from 'lucide-react';

import {
  IServiceConstant,
  servicesConstants,
} from '@/utils/constants/services.constant';
import { PRODUCTION_URL } from '@/utils/helper';
import Footer from '@/components/footer';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';

const iconByServiceKey: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'web-development': Globe,
  'mobile-development': Smartphone,
  'ui-ux-services': Palette,
  'custom-solutions': Cloud,
};

const ServiceDetail = ({
  service,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const ServiceIcon = iconByServiceKey[service.key] ?? Globe;

  return (
    <>
      <Head>
        {generateNextSeo({
          title: `${service?.testimonialConstants?.title || 'Service Detail'} | Murphy Repos`,
          description: service.testimonialConstants.description,
          canonical: `${PRODUCTION_URL}/services/${service.key}`,
          openGraph: {
            url: `${PRODUCTION_URL}/services/${service.key}`,
            type: 'website',
            title: service.testimonialConstants.title || 'Service Detail',
            description:
              service.testimonialConstants.description || 'Service Detail',
            siteName: 'Murphy Repos',
          },
          additionalMetaTags: [
            {
              name: 'keywords',
              content: service.technologiesConstant.data
                .join(', ')
                .concat(', Murphy Repos, Portfolio, Services'),
            },
          ],
        })}
      </Head>

      <div className='bg-slate-100 pt-28'>
        <section className='py-20 lg:py-24'>
          <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
            <div className='mx-auto max-w-5xl text-center'>
              <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg'>
                <ServiceIcon size={30} />
              </div>

              <h1 className='text-5xl font-bold leading-tight text-slate-900 lg:text-7xl'>
                {service.testimonialConstants.title}
              </h1>
              <p className='mx-auto mt-6 max-w-4xl text-balance text-xl text-slate-600 lg:text-2xl'>
                {service.testimonialConstants.description}
              </p>

              <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
                <Link
                  href='/portfolio'
                  className='inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-600'
                >
                  {service.testimonialConstants.buttonTitle}
                  <ArrowRight size={22} />
                </Link>
                <Link
                  href='/#contact'
                  className='inline-flex items-center rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-lg font-medium text-slate-800 transition-colors hover:border-slate-400'
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className='pb-20 lg:pb-24'>
          <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl text-center'>
              <h2 className='text-4xl font-bold leading-tight text-slate-900 lg:text-5xl'>
                What We Deliver
              </h2>
              <p className='mt-5 text-balance text-xl text-slate-600'>
                Purpose-built capabilities tailored to your business goals.
              </p>
            </div>

            <div className='mt-14 grid gap-6 lg:grid-cols-2'>
              {service.cards.map((serviceCard) => (
                <article
                  key={serviceCard.title}
                  className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'
                >
                  <h3 className='text-3xl font-bold text-slate-900 lg:text-4xl'>
                    {serviceCard.title}
                  </h3>

                  <ul className='mt-6 space-y-3'>
                    {serviceCard.points.data.map((point) => (
                      <li
                        key={point}
                        className='flex items-start gap-2 text-lg text-slate-700'
                      >
                        <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-primary' />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='bg-white py-20 lg:py-24'>
          <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl text-center'>
              <h2 className='text-4xl font-bold leading-tight text-slate-900 lg:text-5xl'>
                Technology Stack
              </h2>
              <p className='mt-5 text-balance text-xl text-slate-600'>
                Modern tools and frameworks we use to build reliable products.
              </p>
            </div>

            <div className='mt-10 flex flex-wrap items-center justify-center gap-3'>
              {service.technologiesConstant.data.map((technology) => (
                <span
                  key={technology}
                  className='rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-base font-medium text-primary'
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className='mx-auto mt-14 max-w-5xl'>
              <h3 className='text-center text-3xl font-bold text-slate-900 lg:text-4xl'>
                Our Favorite Choices
              </h3>
              <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
                {service.favorites.map((favorite) => (
                  <article
                    key={favorite}
                    className='rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-center'
                  >
                    <p className='text-lg font-semibold text-slate-800'>
                      {favorite}
                    </p>
                  </article>
                ))}
              </div>
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

        <div className='relative'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  service: IServiceConstant;
}> = async (context) => {
  const serviceParam = context.params?.service;

  if (typeof serviceParam !== 'string') {
    return { notFound: true };
  }

  const service =
    servicesConstants[serviceParam as keyof typeof servicesConstants];

  if (!service) {
    return { notFound: true };
  }

  return {
    props: {
      service,
    },
  };
};

export default ServiceDetail;
