import * as React from 'react'
import styled from 'styled-components'
import i18n from 'services/translations/i18n'
// import { I18n } from 'react-i18next'

const Button = styled.button`
  color: hotpink;
`

const Home = ({ initialLanguage = 'ru' }: any) => {
  const [lng, setLanguage] = React.useState(initialLanguage)

  return (
    <div>
      <h2>Home</h2>
      <Button>This is a hotpink button.</Button>

      <h2>{i18n.t('title')}</h2>

      <div>language: {lng}</div>

      <Button onClick={() => setLanguage('en')}>en</Button>
      <Button onClick={() => setLanguage('ru')}>ru</Button>

      <div>{i18n.t('age.label', { lng })}</div>
      <div>{i18n.t('name.label', { lng })}</div>
      <div>{i18n.t('home.label', { lng })}</div>
    </div>
  )
}

export default Home

// return (
//   <I18n>
//     {
//       (t) => {
//         return (
//           <div>
//             <label>{ t('name.label') }</label>
//             <span>{ gator.name } 🐊</span>
//             <label>{ t('age.label') }</label>
//             <span>{ gator.age }</span>
//             <label>{ t('home.label') }</label>
//             <span>{ gator.home }</span>
//           </div>
//         )
//       }
//     }
//   </I18n>
// )
