import type { Metadata } from 'next';
import { appConfig } from '@/env/dotenv';
import { getServerTranslation } from '@/i18n/server';
import { createPageMetadata, type PageMeta } from '@/utils/seo';
import Calendar from './_ui/Calendar';

const contactMeta = getServerTranslation<PageMeta>('contactPage.meta');

export const metadata: Metadata = createPageMetadata('/contact', contactMeta);

const ContactPage = () => {
  return (
    <div>
      <Calendar
        namespace={appConfig.namespace}
        embedJsUrl={appConfig.embedJsUrl}
        origin={appConfig.origin}
        calLink={appConfig.link}
      />
    </div>
  );
};

export default ContactPage;
