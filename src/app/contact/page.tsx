import type { Metadata } from 'next';
import common from '@/locales/en/common.json';
import { createPageMetadata } from '@/utils/seo';
import Calendar from './_ui/Calendar';
import { calEnv } from '@/env/dotenv';

const contactMeta = common.contactPage.meta;

export const metadata: Metadata = createPageMetadata('/contact', contactMeta);

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
