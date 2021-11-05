import { Route, Routes } from 'react-router-dom';

import { routes, Home, NoMatch } from './routes';

export type RouteProps = {};

const Switcher = (store: any) => (
  <>
    <Routes>
      <Route path="/">
        <Home />
      </Route>

      {routes.map(({ keyName, path, to, element: Component, ...restProps }) => (
        <Route {...restProps} key={keyName} path={path || to} element={<Component {...store} />}>
          <Component {...store} />
        </Route>
      ))}

      <Route path="*">
        <NoMatch {...store} />
      </Route>
    </Routes>
  </>
);

export default Switcher;
