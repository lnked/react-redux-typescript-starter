import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { lazyWithPreload } from 'utils'

import Home from 'pages/home'
export const Cart = lazyWithPreload(() => import(/* webpackChunkName: "cart" */ 'pages/cart'))
export const Shop = lazyWithPreload(() => import(/* webpackChunkName: "shop" */ 'pages/shop'))
export const About = lazyWithPreload(() => import(/* webpackChunkName: "about" */ 'pages/about'))
export const Topics = lazyWithPreload(() => import(/* webpackChunkName: "topics" */ 'pages/topics'))
export const Context = lazyWithPreload(() => import(/* webpackChunkName: "context" */ 'pages/context'))
export const Counter = lazyWithPreload(() => import(/* webpackChunkName: "counter" */ 'pages/counter'))
export const NoMatch = lazyWithPreload(() => import(/* webpackChunkName: "nomatch" */ 'pages/nomatch'))

export const links = [
  { label: 'Home', to: '/', exact: true },
  { label: 'About', to: '/about', component: About },
  { label: 'Shop', to: '/shop', component: Shop },
  { label: 'Cart', to: '/cart', component: Cart },
  { label: 'Topics', to: '/topics', component: Topics },
  { label: 'Context', to: '/context', component: Context },
  { label: 'Counter', to: '/counter', component: Counter },
  { label: 'Page not found', to: '/error-page' },
]

export default function Routes () {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/shop' render={(props: any) => <Shop {...props} />} />
      <Route path='/cart' render={(props: any) => <Cart {...props} />} />
      <Route path='/about' render={(props: any) => <About {...props} />} />
      <Route path='/context' render={(props: any) => <Context {...props} />} />
      <Route path='/topics' render={(props: any) => <Topics {...props} />} />
      <Route path='/counter' render={(props: any) => <Counter {...props} />} />
      <Route path='*' render={(props: any) => <NoMatch {...props} />} exact />
    </Switch>
  )
}
