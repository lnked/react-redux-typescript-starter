import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import ru from './locales/ru.json'

const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  ru: {
    translation: {
      ...ru,
    },
  },
}

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    resources,
    whitelist: ['en', 'ru'],
    fallbackNS: 'translation',
    fallbackLng: false,
    interpolation: {
      escapeValue: false,
    },
  })

export function init () {
  i18n.on('languageChanged', lng => {
    console.log('languageChanged: ', lng)
  })
}

export function unload () {
  i18n.off('languageChanged', lng => {
    console.log('languageChanged: ', lng)
  })
}
