import type { Metadata } from 'next';
import AboutHeroSection from './_ui/AboutHeroSection';
import AboutStorySection from './_ui/AboutStorySection';
import AboutValuesSection from './_ui/AboutValuesSection';
import AboutStatsSection from './_ui/AboutStatsSection';
import AboutTechnologiesSection from './_ui/AboutTechnologiesSection';
import common from '@/locales/en/common.json';
import { createPageMetadata } from '@/utils/seo';

const aboutMeta = common.aboutPage.meta;

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
