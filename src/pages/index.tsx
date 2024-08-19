import ClientTestimonial from '@/components/client-testimonial';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import Services from '@/components/services';
import WorkFlow from '@/components/work-flow';
import { Inter, Space_Grotesk } from 'next/font/google';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        mobile: {
          smooth: true,
          inertia: 0.8,
          getDirection: true,
          breakpoint: 0,
        },
        tablet: {
          smooth: true,
          inertia: 0.8,
          getDirection: true,
          breakpoint: 0,
        },
      }}
      containerRef={containerRef}
    >
      <div
        className={spaceGrotesk.className}
        ref={containerRef}
        data-scroll-container
      >
        <HeroSection />
        <Services />
        <WorkFlow />
        <ClientTestimonial />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}
