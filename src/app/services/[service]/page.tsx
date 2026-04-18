import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cloud, Globe, Palette, Smartphone } from 'lucide-react';
import { PRODUCTION_URL } from '@/utils/helper';
import common from '@/locales/en/common.json';
import ServiceDetailHeroSection from '../_ui/ServiceDetailHeroSection';
import ServiceDetailDeliverablesSection from '../_ui/ServiceDetailDeliverablesSection';
import ServiceDetailTechnologySection from '../_ui/ServiceDetailTechnologySection';
import ServiceDetailCtaSection from '../_ui/ServiceDetailCtaSection';
import {
  ServiceDetailContent,
  ServiceDetailKey,
  serviceDetailKeys,
} from '../service-detail.types';

const iconByServiceKey: Record<
  ServiceDetailKey,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  'web-development': Globe,
  'mobile-development': Smartphone,
  'ui-ux-services': Palette,
  'custom-solutions': Cloud,
};

const serviceDetailPageContent = common.serviceDetailPage;
const serviceDetailItems = serviceDetailPageContent.items as Record<
  ServiceDetailKey,
  ServiceDetailContent
>;

type ServicePageParams = {
  service: string;
};

function isServiceDetailKey(serviceParam: string): serviceParam is ServiceDetailKey {
  return (serviceDetailKeys as readonly string[]).includes(serviceParam);
}

function getService(serviceParam: string): ServiceDetailContent | null {
  if (!isServiceDetailKey(serviceParam)) {
    return null;
  }

  return serviceDetailItems[serviceParam] ?? null;
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
      title: serviceDetailPageContent.meta.notFoundTitle,
    };
  }

  return {
    title: `${service.title} | ${serviceDetailPageContent.meta.siteName}`,
    description: service.description,
    alternates: {
      canonical: `${PRODUCTION_URL}/services/${serviceParam}`,
    },
    openGraph: {
      title: `${serviceDetailPageContent.meta.siteName} | ${service.title}`,
      description: service.description,
      url: `${PRODUCTION_URL}/services/${serviceParam}`,
      siteName: serviceDetailPageContent.meta.siteName,
      type: 'website',
    },
    keywords: service.technologies.concat(serviceDetailPageContent.meta.keywords),
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

  if (!isServiceDetailKey(serviceParam)) {
    notFound();
  }

  const ServiceIcon = iconByServiceKey[serviceParam] ?? Globe;

  return (
    <div>
      <ServiceDetailHeroSection
        service={service}
        buttonLabel={serviceDetailPageContent.heroButton}
        ServiceIcon={ServiceIcon}
      />
      <ServiceDetailDeliverablesSection
        service={service}
        sectionTitle={serviceDetailPageContent.deliverables.title}
        sectionDescription={serviceDetailPageContent.deliverables.description}
      />
      <ServiceDetailTechnologySection
        service={service}
        sectionTitle={serviceDetailPageContent.technologies.title}
        sectionDescription={serviceDetailPageContent.technologies.description}
        favoritesTitle={serviceDetailPageContent.technologies.favoritesTitle}
      />
      <ServiceDetailCtaSection
        title={serviceDetailPageContent.cta.title}
        description={serviceDetailPageContent.cta.description}
        buttonLabel={serviceDetailPageContent.cta.button}
      />
    </div>
  );
}
