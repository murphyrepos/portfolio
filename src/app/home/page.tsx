import type { Metadata } from 'next';
import HeroSection from './_ui/HeroSection';
import Projects from './_ui/Projects';
import Services from './_ui/Services';
import { getServerTranslation } from '@/i18n/server';
import { createPageMetadata } from '@/utils/seo';

export const metadata: Metadata = createPageMetadata('/home', {
  title: getServerTranslation('siteMeta.title'),
  description: getServerTranslation('siteMeta.description'),
  openGraphTitle: getServerTranslation('siteMeta.openGraphTitle'),
});

async function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Projects />
    </>
  );
}

export default Home;
