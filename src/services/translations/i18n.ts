import i18next from 'i18next'
import Cache from 'i18next-localstorage-cache'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(Cache)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    compatibilityJSON: 'v2',
    // fallbackLng: ['es', 'fr'],
    // interpolation: {
    //   escapeValue: false,
    // },
    // lng: 'en',
    // backend: {
    //   // loadPath: './{{lng}}/{{ns}}.json',
    //   loadPath: './{{lng}}.json',
    // },
  })

export default i18next
