import 'dotenv/config';

const getEnv = (key: string, fallback: string) => {
  return process.env[key]?.trim() || fallback;
};

export const calEnv = {
  namespace: getEnv('CAL_NAMESPACE', '30min'),
  embedJsUrl: getEnv('CAL_EMBED_JS_URL', 'https://app.cal.eu/embed/embed.js'),
  origin: getEnv('CAL_ORIGIN', 'https://app.cal.eu'),
  link: getEnv('CAL_LINK', 'murphy-repos/30min'),
} as const;

