import commonEn from '@/locales/en/common.json';

const commonResources = {
  en: commonEn,
} as const;

type CommonResource = typeof commonEn;

function getValueByPath(resource: CommonResource, key: string): unknown {
  return key.split('.').reduce<unknown>((value, segment) => {
    if (
      value &&
      typeof value === 'object' &&
      segment in value
    ) {
      return (value as Record<string, unknown>)[segment];
    }

    throw new Error(`Missing server translation for key: ${key}`);
  }, resource);
}

export function getServerTranslation<T = string>(key: string): T {
  return getValueByPath(commonResources.en, key) as T;
}
