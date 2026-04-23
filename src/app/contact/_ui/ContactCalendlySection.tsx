'use client';

import Script from 'next/script';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/container';

const defaultCalendlyUrl =
  'https://calendly.com/muhammad-hamza-murphyrepos/30min';
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? defaultCalendlyUrl;

const ContactCalendlySection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'contactPage.calendly' });
  const hasCalendlyUrl = calendlyUrl.trim().length > 0;
  const calendlyEmbedUrl = hasCalendlyUrl
    ? `${calendlyUrl}${calendlyUrl.includes('?') ? '&' : '?'}hide_gdpr_banner=1`
    : '';

  return (
    <Container className='mt-8 flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 lg:px-12'>
      <Script
        src='https://assets.calendly.com/assets/external/widget.js'
        strategy='afterInteractive'
      />

      <div
        className='calendly-inline-widget w-full'
        data-url={calendlyEmbedUrl}
        style={{ minWidth: '600px', height: '800px' }}
      />
    </Container>
  );
};

export default ContactCalendlySection;
