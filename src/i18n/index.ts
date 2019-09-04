import i18n from 'i18next';
import { local } from 'storage.io';
import { initReactI18next } from 'react-i18next';

import { config } from './config';

i18n
  .use(initReactI18next)
  .init(config);

export const setLanguage = (lng: string) => i18n.changeLanguage(lng);

export const i18nInit = () => {
  i18n.on('languageChanged', (lng: string) => local.set('language', lng));
};

export const i18nUnload = () => {
  i18n.off('languageChanged', (lng: string) => local.set('language', lng));
};

export default i18n;
