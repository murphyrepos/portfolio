import React from 'react';
import type { Metadata } from 'next';
import { PRODUCTION_URL } from '@/utils/helper';
import common from '@/locales/en/common.json';
import ServicesHeroSection from './_ui/ServicesHeroSection';
import ServicesShowcaseSection from './_ui/ServicesShowcaseSection';
import ServicesCtaSection from './_ui/ServicesCtaSection';

const servicesMeta = common.servicesPage.meta;
const siteMeta = common.siteMeta;

export const metadata: Metadata = {
  title: servicesMeta.title,
  description: servicesMeta.description,
  alternates: {
    canonical: `${PRODUCTION_URL}/services`,
  },
  openGraph: {
    title: servicesMeta.openGraphTitle,
    description: servicesMeta.description,
    url: `${PRODUCTION_URL}/services`,
    siteName: siteMeta.title,
    type: 'website',
  },
};

const ServicesPage = () => {
  return (
    <div>
      <ServicesHeroSection />
      <ServicesShowcaseSection />
      <ServicesCtaSection />
    </div>
  );
};

export default ServicesPage;
