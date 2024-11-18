import React from 'react';
import { GetServerSideProps } from 'next';

import {
  IServiceConstant,
  servicesConstants,
} from '@/utils/constants/services.constant';
import ServiceDetailCard from '@/components/service-detail-card';
import FavoriteChoices from '@/components/favorite-choices';
import CardLayout from '@/components/services-card';
import Technologies from '@/components/technologies';
import { NextSeo } from 'next-seo';
import { PRODUCTION_URL } from '@/utils/helper';
import Footer from '@/components/footer';

const ServiceDetail = ({ service }: { service: IServiceConstant }) => {
  return (
    <>
      <NextSeo
        title={service?.testimonialConstants?.title || 'Service Detail'}
        description={service.testimonialConstants.description}
        canonical={`${PRODUCTION_URL}/services/${service.key}`}
        openGraph={{
          url: PRODUCTION_URL,
          type: 'article',
          title: service.testimonialConstants.title || 'Service Detail',
          description:
            service.testimonialConstants.description || 'Service Detail',
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
          site_name: 'Murphy Repos',
        }}
        // twitter={{
        //   // handle: result.user.profile.username,
        //   site: result.user.profile.username,
        //   cardType: 'summary_large_image',
        // }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: service.technologiesConstant.data
              .join(', ')
              .concat(', Murphy Repos, Portfolio, Services'),
          },
        ]}
      />
      <div className='w-full'>
        <ServiceDetailCard data={service.testimonialConstants} />
        <FavoriteChoices data={{ data: service.favorites }} />
        <CardLayout cards={{ cards: service.cards }} />
        <Technologies data={service.technologiesConstant} />
        <div className='relative mt-20'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return new Promise((res) => {
    const service = context.params?.service;
    if (typeof service === 'string') {
      if (
        !service ||
        !servicesConstants[service as keyof typeof servicesConstants]
      ) {
        res({
          notFound: true,
        });
      }
      res({
        props: {
          service: servicesConstants[service as keyof typeof servicesConstants],
        },
      });
    }
    res({ notFound: true });
  });
};

export default ServiceDetail;
