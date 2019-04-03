import * as React from 'react'

import {
  Input,
  Button,
} from 'components'

import {
  Container,
  Box,
} from './styles'

export interface OuterProps {
  name?: any;
}

class Login extends React.Component<OuterProps, {}> {
  render () {
    return (
      <Container>
        <Box>
          <h3>Вход</h3>
          <p>В личный кабинет и запись на квалификационные экзамены</p>

          <Input name="login" label="Мобильный телефон" />
          <Input name="password" label="Пароль" />

          Забыли пароль

          <Button>Войти</Button>

          Запомнить меня
        </Box>
      </Container>
    )
  }
}

export default Login
