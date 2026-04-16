export const defaultNS = 'common';
export const fallbackLng = 'en';

export const supportedLngs = ['en'] as const;
export type AppLanguage = (typeof supportedLngs)[number];
