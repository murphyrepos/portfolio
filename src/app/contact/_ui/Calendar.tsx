'use client';

import { Container } from '@/components/container';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

type CalendarProps = {
  namespace: string;
  embedJsUrl: string;
  origin: string;
  calLink: string;
};

const Calendar = ({ namespace, embedJsUrl, origin, calLink }: CalendarProps) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace,
        embedJsUrl,
      });
      cal('ui', {
        theme: 'light',
        styles: {
          branding: {
            brandColor: '#2563eb',
          },
        },
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#2563eb',
            'cal-brand-emphasis': 'rgb(37 99 235 / 80%)',
            'cal-bg-brand': '#2563eb',
            'cal-bg-brand-emphasis': 'rgb(37 99 235 / 80%)',
            'cal-border': '#2563eb',
            'cal-border-emphasis': 'rgb(37 99 235 / 80%)',
            'tw-ring-color': 'rgb(37 99 235 / 50%)',
          },
          dark: {
            'cal-brand': '#2563eb',
            'cal-brand-emphasis': 'rgb(37 99 235 / 80%)',
            'cal-bg-brand': '#2563eb',
            'cal-bg-brand-emphasis': 'rgb(37 99 235 / 80%)',
            'cal-border': '#2563eb',
            'cal-border-emphasis': 'rgb(37 99 235 / 80%)',
            'tw-ring-color': 'rgb(37 99 235 / 50%)',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, [namespace, embedJsUrl]);

  return (
    <Container className='mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center py-24 pt-48'>
      <Cal
        namespace={namespace}
        calOrigin={origin}
        embedJsUrl={embedJsUrl}
        calLink={calLink}
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{
          layout: 'month_view',
          useSlotsViewOnSmallScreen: 'true',
          theme: 'light',
        }}
      />
    </Container>
  );
};

export default Calendar;
