import { lazy } from 'react';

import { Home } from '@pages/Home';

export const Example = lazy(
  () =>
    import(
      /* webpackChunkName: "example", webpackPrefetch: true */
      '@pages/Example'
    ),
);

export const QR = lazy(
  () =>
    import(
      /* webpackChunkName: "QR", webpackPrefetch: true */
      '@pages/QR'
    ),
);

export const NoMatch = lazy(
  () =>
    import(
      /* webpackChunkName: "nomatch", webpackPrefetch: true */
      '@pages/NoMatch'
    ),
);

export type RouteProps = {
  keyName: string;
  to: string;
  path?: string;
  element: any;
};

export const routes: RouteProps[] = [
  { keyName: 'navigation.home', to: '/', element: Home },
  { keyName: 'navigation.QR', to: '/qr', element: QR },
  { keyName: 'navigation.about', to: '/about', element: Example },
  {
    keyName: 'navigation.shop',
    to: '/shop',
    path: '/shop',
    element: Home,
  },
  {
    keyName: 'navigation.product',
    to: '/shop/xxx',
    path: '/shop/:product',
    element: Home,
  },
];
