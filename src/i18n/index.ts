import i18n from 'i18next';
import { local } from 'storage.io';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { options } from './options';
import type { Languages } from './types';

i18n.use(LanguageDetector).use(initReactI18next);

if (!i18n.isInitialized) {
  i18n.init(options);
}

export const setLanguage = (lng: Languages) => i18n.changeLanguage(lng);

export const i18nInit = () => {
  i18n.on('languageChanged', (lng: Languages) => local.set('language', lng));
};

export const i18nUnload = () => {
  i18n.off('languageChanged', (lng: Languages) => local.set('language', lng));
};

export default i18n;
