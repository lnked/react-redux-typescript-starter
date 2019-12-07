import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { preloadComponent } from 'utils';
import { setHistory } from 'utils/redirect';

import PrivateRoute from './private-route';

import Home from 'pages/home';

/* webpackChunkName: "cart", webpackPrefetch: true */
export const Cart = preloadComponent(() => import(
  /* webpackChunkName: "cart", webpackPrefetch: true */
  'pages/cart'
));

export const Shop = preloadComponent(() => import(
  /* webpackChunkName: "shop", webpackPrefetch: true */
  'pages/shop'
));

export const About = preloadComponent(() => import(
  /* webpackChunkName: "about", webpackPrefetch: true */
  'pages/about'
));

export const Forms = preloadComponent(() => import(
  /* webpackChunkName: "forms", webpackPrefetch: true */
  'pages/forms'
));

export const Login = preloadComponent(() => import(
  /* webpackChunkName: "login", webpackPrefetch: true */
  'pages/login'
));

export const Topics = preloadComponent(() => import(
  /* webpackChunkName: "topics", webpackPrefetch: true */
  'pages/topics'
));

export const Profile = preloadComponent(() => import(
  /* webpackChunkName: "profile", webpackPrefetch: true */
  'pages/profile'
));

export const Context = preloadComponent(() => import(
  /* webpackChunkName: "context", webpackPrefetch: true */
  'pages/context'
));

export const Counter = preloadComponent(() => import(
  /* webpackChunkName: "counter", webpackPrefetch: true */
  'pages/counter'
));

export const NoMatch = preloadComponent(() => import(
  /* webpackChunkName: "nomatch", webpackPrefetch: true */
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
