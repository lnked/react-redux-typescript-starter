import en from './base/en/translation.json'
import ru from './base/ru/translation.json'

// async function loadLocale (url: string) {
//   const json = await fetch(url).then(res => res.json())
//   console.log({ json })
//   return json
// }
const loadLocale = (url: string) => {
  const json = fetch(url).then(res => res.json())
  console.log({ json })
  return json
}

const en2 = loadLocale('./base/en/translation.json')
const ru2 = loadLocale('./base/ru/translation.json')

console.log(en2, ru2)

export default {
  en: {
    translation: {
      ...en,
    }
  },
  ru: {
    translation: {
      ...ru,
    }
  },
}
