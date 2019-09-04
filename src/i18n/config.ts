import { environment, SITE_LANGUAGE } from 'settings';

import en from './locales/en.json';
import ru from './locales/ru.json';

export const config = {
  lng: SITE_LANGUAGE,
  react: {
    wait: true,
  },
  debug: environment.development,
  fallbackNS: `translations`,
  appendNamespaceToCIMode: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translations: {
        ...en,
      },
    },
    ru: {
      translations: {
        ...ru,
      },
    },
  },
};
