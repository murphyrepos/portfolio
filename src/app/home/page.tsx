import type { Metadata } from 'next';
import HeroSection from './_ui/HeroSection';
import Projects from './_ui/Projects';
import Services from './_ui/Services';
import common from '@/locales/en/common.json';
import { createPageMetadata } from '@/utils/seo';

export const metadata: Metadata = createPageMetadata('/home', {
  title: common.siteMeta.title,
  description: common.siteMeta.description,
  openGraphTitle: common.siteMeta.openGraphTitle,
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
