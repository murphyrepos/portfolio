import React, { LazyExoticComponent } from 'react';
import { GetServerSideProps } from 'next';
import { ServiceDetailProps } from '@/components/type';

const componentsMap: Record<
  string,
  LazyExoticComponent<React.ComponentType>
> = {
  'web-development': React.lazy(
    () => import('@components/providedServices/web-development')
  ),
  'mobile-development': React.lazy(
    () => import('@components/providedServices/mobile-development')
  ),
  'ui-ux-services': React.lazy(
    () => import('@components/providedServices/ui-ux-services')
  ),
  'custom-solutions': React.lazy(
    () => import('@components/providedServices/custom-solutions')
  ),
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  if (!service) return null;
  const ServiceComponent: React.ComponentType = componentsMap[service];
  return ServiceComponent ? (
    <React.Suspense>
      <ServiceComponent />
    </React.Suspense>
  ) : null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return new Promise((res) => {
    const service = context.params?.service;
    const serviceString = Array.isArray(service) ? service[0] : service;
    if (!serviceString || !(serviceString in componentsMap)) {
      res({
        redirect: {
          destination: '/404',
          permanent: false,
        },
      });
    }
    res({
      props: {
        service: serviceString ?? null,
      },
    });
  });
};

export default ServiceDetail;
