import * as React from 'react';
import { matchPath } from "react-router-dom";

const findComponentForRoute = (path: string, routes: any) => {
  const matchingRoute = routes.find((route: any) =>
    matchPath(path, {
      path: route.path,
      exact: route.exact
    })
  );
  return matchingRoute ? matchingRoute.component : null;
};

export const preloadRouteComponent = (path: string) => {
  const component = findComponentForRoute(path, routes);
  if (component && component.preload) {
    component.preload();
  }
};

export const preloadComponent = (importStatement: any) => {
  const Component: any = React.lazy(importStatement);
  Component.preload = importStatement;
  return Component;
}
