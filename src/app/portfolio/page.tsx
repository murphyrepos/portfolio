import React from 'react';
import type { Metadata } from 'next';
import CardComponent from '@/components/portfolio-projects-card';
import { details } from '@/utils/constants/portfolio.content';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Our Impressive Portfolio',
  description:
    "See our latest projects and how we've helped clients achieve their digital goals.",
  alternates: {
    canonical: 'https://murphyrepos.com/portfolio',
  },
  openGraph: {
    title: 'Murphy Repos | Our Impressive Portfolio',
    description:
      "See our latest projects and how we've helped clients achieve their digital goals.",
    url: 'https://murphyrepos.com/portfolio',
    type: 'article',
  },
  keywords: [
    'web development',
    'MERN',
    'React',
    'Node.js',
    'MongoDB',
    'web applications',
    'Murphy Repos',
  ],
};

const Portfolio = () => {
  return (
    <>
      <div className='flex min-h-dvh w-full flex-col items-center justify-start space-y-10 bg-neutral-100 px-6 pb-16 pt-28 lg:px-16'>
        {details.map((detail, index) => (
          <div key={index}>
            <CardComponent
              key={index}
              title={detail.title}
              description={detail.description}
              technologies={detail.technologies}
              image={detail.image}
              role={detail.role}
              isMobile={detail.isMobile}
            />
            {index === details.length - 1 && (
              <div className='h-[2rem] w-full' />
            )}
          </div>
        ))}
      </div>
      <div className='bg-white'>
        <Footer invertColors />
      </div>
    </>
  );
};

export default Portfolio;
