'use client';
import ClientTestimonial from '@/components/client-testimonial';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import Services from '@/components/services';
import WorkFlow from '@/components/work-flow';
import { Space_Grotesk } from 'next/font/google';
import { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRouter } from 'next/router';

export const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function Home() {
  const { asPath } = useRouter(); // Get
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    containerRef.current.scrollLeft = 0;
    containerRef.current.scrollTop = 0;
  }, [asPath]);
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
      watch={[asPath]}
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
