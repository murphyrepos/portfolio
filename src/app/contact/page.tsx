import type { Metadata } from 'next';
import ContactHeroSection from './_ui/ContactHeroSection';
import ContactMainSection from './_ui/ContactMainSection';
import ContactCtaSection from './_ui/ContactCtaSection';
import common from '@/locales/en/common.json';
import { PRODUCTION_URL } from '@/utils/helper';

const contactMeta = common.contactPage.meta;

export const metadata: Metadata = {
  title: contactMeta.title,
  description: contactMeta.description,
  alternates: {
    canonical: `${PRODUCTION_URL}/contact`,
  },
  openGraph: {
    title: contactMeta.openGraphTitle,
    description: contactMeta.description,
    url: `${PRODUCTION_URL}/contact`,
    siteName: 'Murphy Repos',
    type: 'website',
  },
};

const ContactPage = () => {
  return (
    <div>
      <ContactHeroSection />
      <ContactMainSection />
      <ContactCtaSection />
    </div>
  );
};

export default ContactPage;
