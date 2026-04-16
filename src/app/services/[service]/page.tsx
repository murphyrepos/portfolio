import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cloud, Globe, Palette, Smartphone } from 'lucide-react';
import {
  IServiceConstant,
  servicesConstants,
} from '@/utils/constants/services.constant';
import { PRODUCTION_URL } from '@/utils/helper';
import ServiceDetailHeroSection from '../_ui/ServiceDetailHeroSection';
import ServiceDetailDeliverablesSection from '../_ui/ServiceDetailDeliverablesSection';
import ServiceDetailTechnologySection from '../_ui/ServiceDetailTechnologySection';
import ServiceDetailCtaSection from '../_ui/ServiceDetailCtaSection';

const iconByServiceKey: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  'web-development': Globe,
  'mobile-development': Smartphone,
  'ui-ux-services': Palette,
  'custom-solutions': Cloud,
};

type ServicePageParams = {
  service: string;
};

function getService(serviceParam: string): IServiceConstant | null {
  const service = servicesConstants[serviceParam as keyof typeof servicesConstants];
  return service ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ServicePageParams>;
}): Promise<Metadata> {
  const { service: serviceParam } = await params;
  const service = getService(serviceParam);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.testimonialConstants.title} | Murphy Repos`,
    description: service.testimonialConstants.description,
    alternates: {
      canonical: `${PRODUCTION_URL}/services/${service.key}`,
    },
    openGraph: {
      title: service.testimonialConstants.title,
      description: service.testimonialConstants.description,
      url: `${PRODUCTION_URL}/services/${service.key}`,
      siteName: 'Murphy Repos',
      type: 'website',
    },
    keywords: service.technologiesConstant.data.concat([
      'Murphy Repos',
      'Portfolio',
      'Services',
    ]),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<ServicePageParams>;
}) {
  const { service: serviceParam } = await params;
  const service = getService(serviceParam);

  if (!service) {
    notFound();
  }

  const ServiceIcon = iconByServiceKey[service.key] ?? Globe;

  return (
    <div>
      <ServiceDetailHeroSection service={service} ServiceIcon={ServiceIcon} />
      <ServiceDetailDeliverablesSection service={service} />
      <ServiceDetailTechnologySection service={service} />
      <ServiceDetailCtaSection />
    </div>
  );
}
