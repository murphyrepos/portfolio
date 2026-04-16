import React from 'react';
import type { Metadata } from 'next';
import { PRODUCTION_URL } from '@/utils/helper';
import ServicesHeroSection from './_ui/ServicesHeroSection';
import ServicesShowcaseSection from './_ui/ServicesShowcaseSection';
import ServicesCtaSection from './_ui/ServicesCtaSection';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive digital solutions tailored to your business needs, from web and mobile engineering to UI/UX design.',
  alternates: {
    canonical: `${PRODUCTION_URL}/services`,
  },
  openGraph: {
    title: 'Murphy Repos | Our Services',
    description:
      'Comprehensive digital solutions tailored to your business needs, from web and mobile engineering to UI/UX design.',
    url: `${PRODUCTION_URL}/services`,
    siteName: 'Murphy Repos',
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
