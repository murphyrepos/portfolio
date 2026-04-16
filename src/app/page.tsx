import type { Metadata } from 'next';
import HeroSection from '@/components/hero-section';
import Services from '@/components/services';
import WorkFlow from '@/components/work-flow';
import ClientTestimonial from '@/components/client-testimonial';

export const metadata: Metadata = {
  title: 'Murphy Repos',
  description:
    'Transform your vision into reality with cutting-edge design and development solutions.',
  alternates: {
    canonical: 'https://murphyrepos.com',
  },
  openGraph: {
    title: 'Murphy Repos',
    description:
      'Transform your vision into reality with cutting-edge design and development solutions.',
    url: 'https://murphyrepos.com',
    siteName: 'Murphy Repos',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Services />
      <WorkFlow />
      <ClientTestimonial />
    </>
  );
}
