import type { Metadata } from 'next';
import AboutHeroSection from './_ui/AboutHeroSection';
import AboutStorySection from './_ui/AboutStorySection';
import AboutValuesSection from './_ui/AboutValuesSection';
import AboutStatsSection from './_ui/AboutStatsSection';
import AboutTechnologiesSection from './_ui/AboutTechnologiesSection';
import { getServerTranslation } from '@/i18n/server';
import { createPageMetadata, type PageMeta } from '@/utils/seo';

const aboutMeta = getServerTranslation<PageMeta>('aboutPage.meta');

export const metadata: Metadata = createPageMetadata('/about', aboutMeta);

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutStatsSection />
      <AboutTechnologiesSection />
    </div>
  );
};

export default AboutPage;
