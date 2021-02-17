import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { setHistory } from 'utils/redirect';

import { routes, Home, NoMatch } from './routes';

function HistorySetter({ history }: any) {
  setHistory(history);
  return null;
}

export type RouteProps = {};

const Switcher = (store: any) => (
  <>
    <Route component={HistorySetter} />

    <Switch>
      <Route path="/" component={Home} exact />

      {routes.map(({ keyName, path, to, component: Component, exact = false, ...restProps }) => (
        <Route
          {...restProps}
          key={keyName}
          path={path || to}
          exact={exact}
          render={props => <Component {...store} {...props} />}
        />
      ))}

      <Route path="*" render={props => <NoMatch {...store} {...props} />} exact />
    </Switch>
  </>
);

export default withRouter(Switcher);
