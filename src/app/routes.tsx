import * as React from 'react';
import loadable from '@loadable/component';
import { Route, Switch, withRouter } from 'react-router-dom';

// import { preloadComponent } from 'utils';
import { setHistory } from 'utils/redirect';

import { PrivateRoute } from './private-route';

import { Home } from 'pages/Home';

// export const Cart = preloadComponent(() => import(
//   /* webpackChunkName: "cart", webpackPrefetch: true */
//   'pages/Cart'
// ));

// export const About = preloadComponent(() => import(
//   /* webpackChunkName: "about", webpackPrefetch: true */
//   'pages/About'
// ));

export const Cart = loadable(() => import(
  /* webpackChunkName: "cart", webpackPrefetch: true */
  'pages/Cart'
));

export const About = loadable(() => import(
  /* webpackChunkName: "about", webpackPrefetch: true */
  'pages/About'
));

export const Shop = loadable(() => import(
  /* webpackChunkName: "shop", webpackPrefetch: true */
  'pages/Shop'
));

export const Forms = loadable(() => import(
  /* webpackChunkName: "forms", webpackPrefetch: true */
  'pages/Forms'
));

export const Login = loadable(() => import(
  /* webpackChunkName: "login", webpackPrefetch: true */
  'pages/Login'
));

export const Topics = loadable(() => import(
  /* webpackChunkName: "topics", webpackPrefetch: true */
  'pages/Topics'
));

export const Profile = loadable(() => import(
  /* webpackChunkName: "profile", webpackPrefetch: true */
  'pages/Profile'
));

export const Context = loadable(() => import(
  /* webpackChunkName: "context", webpackPrefetch: true */
  'pages/Context'
));

export const Counter = loadable(() => import(
  /* webpackChunkName: "counter", webpackPrefetch: true */
  'pages/Counter'
));

export const NoMatch = loadable(() => import(
  /* webpackChunkName: "nomatch", webpackPrefetch: true */
  'pages/NoMatch'
));

export const routes = [
  { keyName: 'navigation.home', to: '/', component: Home, exact: true },
  { keyName: 'navigation.about', to: '/about', component: About },
  { keyName: 'navigation.shop', to: '/shop', component: Shop, path: ['/shop', '/shop/:product'], exact: true },
  { keyName: 'navigation.cart', to: '/cart', component: Cart },
  { keyName: 'navigation.forms', to: '/forms', component: Forms },
  { keyName: 'navigation.login', to: '/login', component: Login },
  { keyName: 'navigation.topics', to: '/topics', component: Topics },
  { keyName: 'navigation.profile', to: '/profile', component: Profile },
  { keyName: 'navigation.context', to: '/context', component: Context },
  { keyName: 'navigation.counter', to: '/counter', component: Counter },
];

function HistorySetter({ history }: any) {
  setHistory(history);
  return null;
}

export interface RouteProps {}

function Switcher(store: any) {
  return (
    <React.Fragment>
      <Route component={HistorySetter} />

      <Switch>
        {/*
        <Route path='/' component={Home} exact />
        */}

        {routes.map(({ keyName, path, to, component: Component, exact = false, ...restProps }) => (
          <Route
            {...restProps}
            key={keyName}
            path={path || to}
            exact={exact}
            render={(props: RouteProps) => <Component {...store} {...props} />}
          />
        ))}

        <PrivateRoute
          path="/protected"
          alternative="/login"
          render={(props: RouteProps) => <Home {...store} {...props} />}
        />

        <Route path="*" render={(props: RouteProps) => <NoMatch {...store} {...props} />} exact />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(Switcher);
