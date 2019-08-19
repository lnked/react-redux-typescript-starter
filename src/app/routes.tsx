import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { lazyWithPreload } from 'utils';
import { setHistory } from 'utils/redirect';

import PrivateRoute from './private-route';

import Home from 'pages/home';

// /* webpackChunkName: "cart", webpackPrefetch: true */
export const Cart = lazyWithPreload(() => import(
  /* webpackChunkName: "cart" */
  'pages/cart'
));

export const Shop = lazyWithPreload(() => import(
  /* webpackChunkName: "shop" */
  'pages/shop'
));

export const About = lazyWithPreload(() => import(
  /* webpackChunkName: "about" */
  'pages/about'
));

export const Forms = lazyWithPreload(() => import(
  /* webpackChunkName: "forms" */
  'pages/forms'
));

export const Login = lazyWithPreload(() => import(
  /* webpackChunkName: "login" */
  'pages/login'
));

export const Topics = lazyWithPreload(() => import(
  /* webpackChunkName: "topics" */
  'pages/topics'
));

export const Profile = lazyWithPreload(() => import(
  /* webpackChunkName: "profile" */
  'pages/profile'
));

export const Context = lazyWithPreload(() => import(
  /* webpackChunkName: "context" */
  'pages/context'
));

export const Counter = lazyWithPreload(() => import(
  /* webpackChunkName: "counter" */
  'pages/counter'
));

export const NoMatch = lazyWithPreload(() => import(
  /* webpackChunkName: "nomatch" */
  'pages/nomatch'
));

export const routes = [
  { keyName: 'navigation.home', to: '/', component: Home, exact: true },
  { keyName: 'navigation.about', to: '/about', component: About },
  { keyName: 'navigation.shop', to: '/shop', component: Shop },
  { keyName: 'navigation.cart', to: '/cart', component: Cart },
  { keyName: 'navigation.forms', to: '/forms', component: Forms },
  { keyName: 'navigation.login', to: '/login', component: Login },
  { keyName: 'navigation.topics', to: '/topics', component: Topics },
  { keyName: 'navigation.profile', to: '/profile', component: Profile },
  { keyName: 'navigation.context', to: '/context', component: Context },
  { keyName: 'navigation.counter', to: '/counter', component: Counter },
  { keyName: 'navigation.protected', to: '/protected', component: Counter },
  { keyName: 'navigation.page_not_found', to: '/error-page' },
];

function HistorySetter({ history }: any) {
  setHistory(history);
  return null;
}

function Switcher(store: any) {
  return (
    <React.Fragment>
      <Route component={HistorySetter} />

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
    </React.Fragment>
  );
}

export default withRouter(Switcher);
