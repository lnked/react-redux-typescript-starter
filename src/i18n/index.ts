import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { environment } from 'settings';

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
    lng: 'ru',
    resources,
    debug: environment.development,
    fallbackNS: `translations`,
    appendNamespaceToCIMode: true,
  });

export const i18nInit = () => {
  i18n.on('languageChanged', lng => console.info(`languageChanged ${lng}`));
};

export const i18nUnload = () => {
  i18n.off('languageChanged', lng => console.info(`languageChanged ${lng}`));
};

export default i18n;
