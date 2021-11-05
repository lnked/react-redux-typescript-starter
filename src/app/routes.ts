import { lazy } from 'react';

import { Home } from '@pages/Home';

export const Example = lazy(
  () =>
    import(
      /* webpackChunkName: "example", webpackPrefetch: true */
      '@pages/Example'
    ),
);

export const NoMatch = lazy(
  () =>
    import(
      /* webpackChunkName: "nomatch", webpackPrefetch: true */
      '@pages/NoMatch'
    ),
);

export const routes = [
  { keyName: 'navigation.home', to: '/', element: Home },
  { keyName: 'navigation.about', to: '/about', element: Example },
  {
    keyName: 'navigation.shop',
    to: '/shop',
    path: '/shop/(:product)?',
    element: Home,
  },
];

export { Home };
