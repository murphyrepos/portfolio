import React from 'react';
import CardComponent from '@/components/portfolio-projects-card';
import { details } from '@/utils/constants/portfolio.content';
import { NextSeo } from 'next-seo';
import Footer from '@/components/footer';

const Portfolio = () => {
  return (
    <>
      <NextSeo
        title={'Murphy Repos | Our Impressive Portfolio'}
        description={
          "See our latest projects and how we've helped clients achieve their digital goals."
        }
        canonical={`https://murphyrepos.com/portfolio`}
        openGraph={{
          url: `https://murphyrepos.com/portfolio`,
          type: 'article',
          title: 'Murphy Repos | Our Impressive Portfolio',
          description:
            "See our latest projects and how we've helped clients achieve their digital goals.",
          // images: [
          //   {
          //     url:
          //       result?.images?.[0] ??
          //       '/assets/default_image_polls.png' ??
          //       result.user.profile.picture ??
          //       '',
          //     alt: result.user.profile.username,
          //     width: 1200,
          //     height: 630,
          //   },
          // ],
        }}
        // twitter={{
        //   // handle: result.user.profile.username,
        //   site: result.user.profile.username,
        //   cardType: 'summary_large_image',
        // }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'web development, MERN, React, Node.js, MongoDB, web applications, Murphy Repos',
          },
        ]}
      />
      <div className='flex min-h-dvh w-full flex-col items-center justify-start space-y-10 bg-neutral-100 px-6 pb-16 pt-28 lg:px-16'>
        {details.map((detail, index) => (
          <>
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
          </>
        ))}
      </div>
      <div className='bg-white'>
        <Footer invertColors />
      </div>
    </>
  );
};

export default Portfolio;
