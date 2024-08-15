import ClientTestimonial from '@/components/client-testimonial';
import HeroSection from '@/components/hero-section';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className='min-h-40 w-full bg-white'></div>
      <ClientTestimonial />
    </div>
  );
}
