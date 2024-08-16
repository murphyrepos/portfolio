import ClientTestimonial from '@/components/client-testimonial';
import HeroSection from '@/components/hero-section';
import Services from '@/components/services';
import WorkFlow from '@/components/work-flow';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <WorkFlow />
      <ClientTestimonial />
    </div>
  );
}
