import * as React from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import { colors } from 'theme'

const Button = styled.button`
  padding: 5px 8px;
  outline: 0;
  color: ${colors.pink};
  border: 1px solid;
  cursor: pointer;
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
        ru
      </Button>

      <div>{i18n.t('name.label')}</div>
      <div>{i18n.t('home.label')}</div>
    </div>
  )
}

export default Home
