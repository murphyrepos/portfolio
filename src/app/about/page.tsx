import type { Metadata } from 'next';
import AboutHeroSection from './_ui/AboutHeroSection';
import AboutStorySection from './_ui/AboutStorySection';
import AboutValuesSection from './_ui/AboutValuesSection';
import AboutStatsSection from './_ui/AboutStatsSection';
import AboutTechnologiesSection from './_ui/AboutTechnologiesSection';
import common from '@/locales/en/common.json';
import { PRODUCTION_URL } from '@/utils/helper';

const aboutMeta = common.aboutPage.meta;

export const metadata: Metadata = {
  title: aboutMeta.title,
  description: aboutMeta.description,
  alternates: {
    canonical: `${PRODUCTION_URL}/about`,
  },
  openGraph: {
    title: aboutMeta.openGraphTitle,
    description: aboutMeta.description,
    url: `${PRODUCTION_URL}/about`,
    siteName: 'Murphy Repos',
    type: 'website',
  },
};

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
