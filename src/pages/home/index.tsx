import * as React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Button = styled.button`
  color: hotpink;
`

const Home = ({ initialLanguage = 'ru' }: any) => {
  const [lng, setLanguage] = React.useState(initialLanguage)
  const { t, i18n } = useTranslation(lng)

  return (
    <div>
      <h2>Home</h2>
      <Button>This is a hotpink button.</Button>

      <h2>{t('title', { count: 10 })}</h2>
      <h2>{t('age.label', { count: 10 })}</h2>
      <div>language: {lng}</div>

      <Button
        onClick={() => {
          setLanguage('en')
          i18n.changeLanguage('en')
        }}
      >
        en
      </Button>

      <Button
        onClick={() => {
          setLanguage('ru')
          i18n.changeLanguage('ru')
        }}
      >
        en
      </Button>

      <div>{i18n.t('name.label')}</div>
      <div>{i18n.t('home.label')}</div>
    </div>
  )
}

export default Home
