import { Route, Routes } from 'react-router-dom';

import { Home } from '@pages/Home';

import { routes, NoMatch, RouteProps } from './routes';

const renderRoute = (store: any) => {
  // eslint-disable-next-line react/display-name
  return ({ keyName, path, to, element: Component, ...restProps }: RouteProps) => (
    <Route {...restProps} key={keyName} path={path || to} element={<Component {...store} />} />
  );
};

export const Switch = (store: any) => (
  <Routes>
    <Route path="/" element={<Home />} />

    {routes.map(renderRoute(store))}

    <Route path="*" element={<NoMatch {...store} />} />
  </Routes>
);
