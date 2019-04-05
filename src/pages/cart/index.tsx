import * as React from 'react'
import styled from '@emotion/styled'

import { Store } from 'store'
import { JsonPretty } from 'components'

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

export interface OuterProps {
  children?: React.ReactChild[];
  initialCount: number;
}

function init (initialCount: number) {
  return { count: initialCount }
}

function reducer (state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

// const errors = new Map([
//   ['invalid-email', 'Неверно указан e-mail'],
// ]);

// return errors.get(error) || error;

const Cart: React.FC<OuterProps> = ({ initialCount = 1 }: OuterProps) => {
  const { ui, app } = React.useContext(Store)
  const [state, dispatch] = React.useReducer(reducer, initialCount, init)

  return (
    <Provider>
      <div>Count: {state.count}</div>
      <JsonPretty json={ui} />
      <JsonPretty json={app} />
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</button>

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
