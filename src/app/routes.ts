import { lazy } from 'react';

import { Home } from 'pages/Home';

export const Example = lazy(
  () =>
    import(
      /* webpackChunkName: "example", webpackPrefetch: true */
      'pages/Example'
    ),
);

export const NoMatch = lazy(
  () =>
    import(
      /* webpackChunkName: "nomatch", webpackPrefetch: true */
      'pages/NoMatch'
    ),
);

export const routes = [
  { keyName: 'navigation.home', to: '/', component: Home, exact: true },
  { keyName: 'navigation.about', to: '/about', component: Example },
  {
    keyName: 'navigation.shop',
    to: '/shop',
    component: Home,
    path: ['/shop', '/shop/:product'],
    exact: true,
  },
];

export { Home };
