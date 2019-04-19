import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { lazyWithPreload } from 'utils'

import PrivateRoute from './private-route'

import Home from 'pages/home'
export const Cart = lazyWithPreload(() => import('pages/cart'))
export const Shop = lazyWithPreload(() => import('pages/shop'))
export const About = lazyWithPreload(() => import('pages/about'))
export const Forms = lazyWithPreload(() => import('pages/forms'))
export const Login = lazyWithPreload(() => import('pages/login'))
export const Topics = lazyWithPreload(() => import('pages/topics'))
export const Profile = lazyWithPreload(() => import('pages/profile'))
export const Context = lazyWithPreload(() => import('pages/context'))
export const Counter = lazyWithPreload(() => import('pages/counter'))
export const NoMatch = lazyWithPreload(() => import('pages/nomatch'))

export const routes = [
  { label: 'Home', to: '/', component: Home, exact: true },
  { label: 'About', to: '/about', component: About },
  { label: 'Shop', to: '/shop', component: Shop },
  { label: 'Cart', to: '/cart', component: Cart },
  { label: 'Forms', to: '/forms', component: Forms },
  { label: 'Login', to: '/login', component: Login },
  { label: 'Topics', to: '/topics', component: Topics },
  { label: 'Profile', to: '/profile', component: Profile },
  { label: 'Context', to: '/context', component: Context },
  { label: 'Counter', to: '/counter', component: Counter },
  { label: 'Protected', to: '/protected', component: Counter },
  { label: 'Page not found', to: '/error-page' },
]

function Switcher(store: any) {
  return (
    <Switch>
      {/*
      {routes.map((to, exact, component) => {
        <Route path={to} component={component} exact={exact} />
      })}
      <Route path='/' component={Home} exact />
      */}

      <Route exact path="/" render={(props: any) => <Home {...store} {...props} />} />
      <Route
        exact
        path={['/shop', '/shop/:product']}
        render={(props: any) => <Shop {...store} {...props} />}
      />
      <Route path="/cart" render={(props: any) => <Cart {...store} {...props} />} />
      <Route path="/forms" render={(props: any) => <Forms {...store} {...props} />} />
      <Route path="/about" render={(props: any) => <About {...store} {...props} />} />
      <Route path="/context" render={(props: any) => <Context {...store} {...props} />} />
      <Route path="/login" render={(props: any) => <Login {...store} {...props} />} />
      <Route path="/topics" render={(props: any) => <Topics {...store} {...props} />} />
      <Route path="/profile" render={(props: any) => <Profile {...store} {...props} />} />
      <Route path="/counter" render={(props: any) => <Counter {...store} {...props} />} />
      <PrivateRoute path="/protected" alternative="/login" component={Home} />
      <Route path="*" render={(props: any) => <NoMatch {...store} {...props} />} exact />
    </Switch>
  )
}
export default Switcher
