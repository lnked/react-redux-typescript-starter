import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from './locales'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    debug: false,
    resources,
    load: 'languageOnly',
    defaultNS: 'translation',
    fallbackNS: 'translation',
    fallbackLng: 'en',
    whitelist: ['en', 'ru'],
    saveMissing: true,
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
