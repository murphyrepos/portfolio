import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeroSection from '@/components/hero-section';
import { Carousel } from '@/components/ui/carousel';
import CarouselSection from '@/components/carousel-section';
import ServicesSection from '@/components/services-section';
import FooterSection from '@/components/footer-section';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='flex w-full flex-1 flex-col'>
      <div className='bg-secondary'>
        <HeroSection />
      </div>
      <div className='flex w-full rounded-b-[6rem] border-b bg-secondary px-2 py-12'>
        <CarouselSection />
      </div>
      <div className='mx-auto max-w-screen-2xl px-2 py-24'>
        <ServicesSection />
      </div>
      <div className='flex h-full w-full flex-1'>
        <FooterSection />
      </div>
    </div>
  );
}
