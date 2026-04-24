import type { Metadata } from 'next';
import common from '@/locales/en/common.json';
import { PRODUCTION_URL } from '@/utils/helper';
import Calendar from './_ui/Calendar';
import { calEnv } from '@/env/dotenv';

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
      <Calendar
        namespace={calEnv.namespace}
        embedJsUrl={calEnv.embedJsUrl}
        origin={calEnv.origin}
        calLink={calEnv.link}
      />
    </div>
  );
};

export default ContactPage;
