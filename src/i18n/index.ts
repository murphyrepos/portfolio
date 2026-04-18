import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import commonEn from '@/locales/en/common.json';
import { defaultNS, fallbackLng, supportedLngs } from './settings';

const resources = {
  en: {
    common: commonEn,
  },
} as const;

if (!i18n.isInitialized) {
  i18n.use(LanguageDetector).use(initReactI18next).init({
    resources,
    defaultNS,
    fallbackLng,
    supportedLngs: [...supportedLngs],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });
}

export default i18n;
