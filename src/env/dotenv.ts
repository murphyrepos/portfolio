import 'dotenv/config';

type AppConfig = {
  namespace: string;
  embedJsUrl: string;
  origin: string;
  link: string;
};

export const appConfig: AppConfig = {
  namespace: process.env.CAL_NAMESPACE ?? '',
  embedJsUrl: process.env.CAL_EMBED_JS_URL ?? '',
  origin: process.env.CAL_ORIGIN ?? '',
  link: process.env.CAL_LINK ?? '',
};
