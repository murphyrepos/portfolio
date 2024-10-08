import React from 'react';
import { useRouter } from 'next/router';
const componentsMap: any = {
  'web-development': React.lazy(
    () => import('@components/providedServices/web-development')
  ),
  'mobile-development': React.lazy(
    () => import('@components/providedServices/modile-development')
  ),
  'ui-ux-services': React.lazy(
    () => import('@components/providedServices/ui-ux-services')
  ),
  'custom-solutions': React.lazy(
    () => import('@components/providedServices/custom-solutions')
  ),
};
const ServiceDetail = () => {
  const router = useRouter();
  const { service } = router.query;
  const ServiceComponent = componentsMap[service as string];
  if (!service) return <div>Loading...</div>;
  if (!ServiceComponent) return <div>Service not found</div>;
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ServiceComponent />
    </React.Suspense>
  );
};

export default ServiceDetail;
