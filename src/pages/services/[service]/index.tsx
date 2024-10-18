import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import {
  IServiceConstant,
  servicesConstants,
} from '@/utils/constants/services.constant';
import ServiceDetailCard from '@/components/service-detail-card';
import FavoriteChoices from '@/components/favorite-choices';
import CardLayout from '@/components/servicesCard';
import Technologies from '@/components/technologies';
import { NextSeo } from 'next-seo';
import { PRODUCTION_URL } from '@/utils/helper';

const ServiceDetail = ({ service }: { service: IServiceConstant }) => {
  return (
    <>
      <NextSeo
        title={service.testimonialConstants.title || 'Service Detail'}
        description={service.testimonialConstants.description}
        canonical={PRODUCTION_URL}
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
      <div>
        <ServiceDetailCard data={service.testimonialConstants} />
        <FavoriteChoices data={{ data: service.favorites }} />
        <CardLayout cards={{ cards: service.cards }} />
        <Technologies data={service.technologiesConstant} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return new Promise((resolve) => {
    try {
      const service = context.params?.service as string;
      if (
        !service ||
        !servicesConstants[service as keyof typeof servicesConstants]
      ) {
        resolve({
          notFound: true,
        });
      } else {
        resolve({
          props: {
            service:
              servicesConstants[service as keyof typeof servicesConstants],
          },
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      resolve({
        notFound: true,
      });
    }
  });
};

export default ServiceDetail;
