import i18n from 'i18next';
import { local } from 'storage.io';
import { initReactI18next } from 'react-i18next';

import {
  environment,
  SITE_LANGUAGE,
} from 'settings';

import en from './locales/en.json';
import ru from './locales/ru.json';

const resources = {
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
};

i18n
  .use(initReactI18next)
  .init({
    lng: SITE_LANGUAGE,
    resources,
    debug: environment.development,
    fallbackNS: `translations`,
    appendNamespaceToCIMode: true,
  });

export const setLanguage = (lng: string) => i18n.changeLanguage(lng);

export const i18nInit = () => {
  i18n.on('languageChanged', lng => local.set('language', lng));
};

export const i18nUnload = () => {
  i18n.off('languageChanged', lng => local.set('language', lng));
};

export default i18n;
