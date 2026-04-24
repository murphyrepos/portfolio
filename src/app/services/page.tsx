import React from 'react';
import type { Metadata } from 'next';
import common from '@/locales/en/common.json';
import { createPageMetadata } from '@/utils/seo';
import ServicesHeroSection from './_ui/ServicesHeroSection';
import ServicesShowcaseSection from './_ui/ServicesShowcaseSection';
import ServicesCtaSection from './_ui/ServicesCtaSection';

const servicesMeta = common.servicesPage.meta;

export const metadata: Metadata = createPageMetadata('/services', servicesMeta);

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
