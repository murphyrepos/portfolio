import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeroSection from '@/components/hero-section';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='flex w-full flex-1 flex-col'>
      <HeroSection />
    </div>
  );
}
