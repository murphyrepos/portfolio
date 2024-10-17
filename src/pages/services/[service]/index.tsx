import React from 'react';
import { GetServerSideProps } from 'next';

import {
  IServiceConstant,
  servicesConstants,
} from '@/utils/constants/services.constant';
import ServiceDetailCard from '@/components/service-detail-card';
import FavoriteChoices from '@/components/favorite-choices';
import CardLayout from '@/components/servicesCard';
import Technologies from '@/components/technologies';
import { NextSeo } from 'next-seo';

const ServiceDetail = ({ service }: { service: IServiceConstant }) => {
  return (
    <>
      <NextSeo
        title={service.testimonialConstants.title || 'Service Detail'}
        description={service.testimonialConstants.description}
        canonical={`https://murphyrepos.com//service/${service.key}`}
        openGraph={{
          url: `https://murphyrepos.com//service/${service.key}`,
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
        }}
        // twitter={{
        //   // handle: result.user.profile.username,
        //   site: result.user.profile.username,
        //   cardType: 'summary_large_image',
        // }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: service.technologiesConstant.data.join(', '),
          },
        ]}
      />
      <div>
        <ServiceDetailCard data={service.testimonialConstants} />
        <FavoriteChoices data={{ data: service.favorites }} />
        <CardLayout cards={{ cards: service.cards }} />
        <Technologies data={service.technologiesConstant} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return new Promise((res) => {
    const service = context.params?.service as string;
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
  });
};

export default ServiceDetail;
