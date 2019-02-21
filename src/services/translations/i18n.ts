import i18next from 'i18next'
import Cache from 'i18next-localstorage-cache'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(Cache)
  .use(LanguageDetector)
  .init({
    // fallbackLng: 'en',
    // ns: ['file1', 'file2'],
    // defaultNS: 'file1',
    // debug: true,
    fallbackLng: ['es', 'fr'],
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        translation: {
          age: { label: 'Age', },
          home: { label: 'Home', },
          name: { label: 'Name', },
        },
      },
      ru: {
        translation: {
          age: { label: 'Возраст', },
          home: { label: 'Дом', },
          name: { label: 'Имя', },
        },
      },
    },
  })

export default i18next
