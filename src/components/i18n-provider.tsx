'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

const I18nProvider = ({ children }: I18nProviderProps) => {
  useEffect(() => {
    const syncDocumentLanguage = (language?: string) => {
      if (typeof document === 'undefined') {
        return;
      }

      document.documentElement.lang = language ?? 'en';
    };

    syncDocumentLanguage(i18n.resolvedLanguage ?? i18n.language);

    const handleLanguageChange = (nextLanguage: string) => {
      syncDocumentLanguage(nextLanguage);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
