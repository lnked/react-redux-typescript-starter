import * as React from 'react'
import styled from '@emotion/styled'

// import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

// import Home from 'pages/home'
// const Cart = React.lazy(() => import(/* webpackChunkName: 'cart' */ 'pages/cart'))

import Provider from './components/store/context'
import Order from './components/order'
import Right from './components/right'
import Center from './components/center'

const StyledContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border: 1px solid #ddd;
`

export interface P {
  children?: JSX.Element[] | JSX.Element | any;
}

export function Cart () {

  return (
    <Provider>
      <StyledContainer>
        {/*

        Оформление заказа
        Количество приборов
        Ваше имя *
        Ваш e-mail
        Ваш телефон *
        Адрес доставки */}

        <Order />
        <Right />
        <Center />
      </StyledContainer>
    </Provider>
  )

}

export default Cart
