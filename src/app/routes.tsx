import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { lazyWithPreload } from 'utils'

import PrivateRoute from './private-route'

import Home from 'pages/home'
export const Cart = lazyWithPreload(() => import(/* webpackChunkName: "cart" */ 'pages/cart'))
export const Shop = lazyWithPreload(() => import(/* webpackChunkName: "shop" */ 'pages/shop'))
export const About = lazyWithPreload(() => import(/* webpackChunkName: "about" */ 'pages/about'))
export const Forms = lazyWithPreload(() => import(/* webpackChunkName: "forms" */ 'pages/forms'))
export const Topics = lazyWithPreload(() => import(/* webpackChunkName: "topics" */ 'pages/topics'))
export const Context = lazyWithPreload(() => import(/* webpackChunkName: "context" */ 'pages/context'))
export const Counter = lazyWithPreload(() => import(/* webpackChunkName: "counter" */ 'pages/counter'))
export const NoMatch = lazyWithPreload(() => import(/* webpackChunkName: "nomatch" */ 'pages/nomatch'))

export const links = [
  { label: 'Home', to: '/', exact: true },
  { label: 'About', to: '/about', component: About },
  { label: 'Shop', to: '/shop', component: Shop },
  { label: 'Cart', to: '/cart', component: Cart },
  { label: 'Forms', to: '/forms', component: Forms },
  { label: 'Topics', to: '/topics', component: Topics },
  { label: 'Context', to: '/context', component: Context },
  { label: 'Counter', to: '/counter', component: Counter },
  { label: 'Protected', to: '/protected', component: Counter },
  { label: 'Page not found', to: '/error-page' },
]

export default function Routes () {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/shop(/:product)?' render={(props: any) => <Shop {...props} />} />
      <Route path='/cart' render={(props: any) => <Cart {...props} />} />
      <Route path='/forms' render={(props: any) => <Forms {...props} />} />
      <Route path='/about' render={(props: any) => <About {...props} />} />
      <Route path='/context' render={(props: any) => <Context {...props} />} />
      <Route path='/topics' render={(props: any) => <Topics {...props} />} />
      <Route path='/counter' render={(props: any) => <Counter {...props} />} />
      <PrivateRoute path='/protected' alternative='/login' component={Home} />
      <Route path='*' render={(props: any) => <NoMatch {...props} />} exact />
    </Switch>
  )
}
