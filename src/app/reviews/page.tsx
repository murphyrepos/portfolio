import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Quote, Star } from 'lucide-react';
import Footer from '@/components/footer';
import { Skeleton } from '@/components/ui/skeleton';
import { PRODUCTION_URL } from '@/utils/helper';

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'Read what our clients say about collaborating with Murphy Repos across web, mobile, and product design projects.',
  alternates: {
    canonical: `${PRODUCTION_URL}/reviews`,
  },
  openGraph: {
    title: 'Murphy Repos | Reviews',
    description:
      'Read what our clients say about collaborating with Murphy Repos across web, mobile, and product design projects.',
    url: `${PRODUCTION_URL}/reviews`,
    siteName: 'Murphy Repos',
    type: 'website',
  },
};

const reviewStats = [
  { number: '4.9', suffix: '/5', label: 'Average Rating' },
  { number: '98', suffix: '%', label: 'Client Satisfaction' },
  { number: '150', suffix: '+', label: '5-Star Reviews' },
  { number: '95', suffix: '%', label: 'Return Clients' },
];

const reviews = [
  {
    name: 'Jennifer Martinez',
    role: 'CEO, TechStart Inc.',
    review:
      'Working with this agency was an absolute pleasure. They transformed our outdated website into a modern, high-performing platform that has significantly increased our conversion rates. The team was professional, responsive, and truly understood our vision.',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    role: 'Founder, GrowthLab',
    review:
      'Exceptional service from start to finish. The team delivered our mobile app ahead of schedule and exceeded all expectations. Their attention to detail and commitment to quality is unmatched. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Amanda Thompson',
    role: 'Marketing Director, BrightFuture',
    review:
      "We've worked with several agencies before, but none compare to the level of expertise and creativity this team brings. They not only met our requirements but also suggested improvements that made our project even better.",
    rating: 5,
  },
  {
    name: 'David Kumar',
    role: 'Product Manager, InnovateCo',
    review:
      "The entire process was smooth and transparent. Regular updates, clear communication, and a genuine interest in our success made this collaboration outstanding. The final product speaks for itself - it's exactly what we needed.",
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Owner, Artisan Boutique',
    review:
      'As a small business owner, I was nervous about investing in a new website. The team made the entire experience easy and stress-free. They explained everything clearly and delivered a beautiful site that my customers love.',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    role: 'CTO, DataFlow Systems',
    review:
      'Impressive technical expertise combined with creative design thinking. They helped us modernize our entire digital infrastructure and the results have been phenomenal. Our team productivity has increased by 40%.',
    rating: 5,
  },
];

const ReviewsPage = () => {
  return (
    <div className='bg-slate-100 pt-28'>
        <section className='py-20 lg:py-24'>
          <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
            <div className='mx-auto max-w-5xl text-center'>
              <h1 className='text-5xl font-bold leading-tight text-slate-900 lg:text-7xl'>
                Client Reviews
              </h1>
              <p className='mt-5 text-balance text-xl text-slate-600 lg:text-2xl'>
                Don&apos;t just take our word for it - hear what our clients have
                to say about working with us
              </p>
            </div>
          </div>
        </section>

        <section className='bg-primary py-16 text-white lg:py-20'>
          <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
            <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
              {reviewStats.map((stat) => (
                <article key={stat.label} className='text-center'>
                  <p className='text-6xl font-bold leading-none lg:text-7xl'>
                    {stat.number}
                    <span className='ml-1 text-4xl lg:text-5xl'>{stat.suffix}</span>
                  </p>
                  <p className='mt-3 text-lg text-blue-100 lg:text-2xl'>
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='py-20 lg:py-24'>
          <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {reviews.map((review, index) => (
                <article
                  key={review.name}
                  className={`h-full rounded-3xl border-2 bg-slate-100 p-8 shadow-sm ${
                    index === 1 || index === 5
                      ? 'border-primary'
                      : 'border-slate-200'
                  }`}
                >
                  <div className='mb-6 flex items-center gap-4'>
                    <Skeleton className='h-16 w-16 rounded-full bg-slate-300' />
                    <div>
                      <h2 className='text-4xl font-bold text-slate-900'>
                        {review.name}
                      </h2>
                      <p className='text-xl text-slate-600'>{review.role}</p>
                    </div>
                  </div>

                  <div className='mb-5 flex gap-1'>
                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                      <Star
                        key={`${review.name}-${starIndex}`}
                        className='h-6 w-6 fill-yellow-400 text-yellow-400'
                      />
                    ))}
                  </div>

                  <div className='relative'>
                    <Quote className='absolute -left-1 -top-1 h-8 w-8 text-blue-200' />
                    <p className='pl-7 text-xl leading-relaxed text-slate-600'>
                      {review.review}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='pb-20 pt-4 lg:pb-24'>
          <div className='mx-auto w-full max-w-[1240px] px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl text-center'>
              <h2 className='text-5xl font-bold leading-tight text-slate-900 lg:text-6xl'>
                Join Our Happy Clients
              </h2>
              <p className='mt-5 text-balance text-xl text-slate-600 lg:text-2xl'>
                Experience the difference that quality, dedication, and
                expertise can make for your business
              </p>
              <div className='mt-10'>
                <Link
                  href='/#contact'
                  className='inline-flex items-center justify-center rounded-xl bg-primary px-10 py-4 text-xl font-semibold text-white transition-colors hover:bg-blue-600'
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
};

export default ReviewsPage;
