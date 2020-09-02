import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: any) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb: any) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export const PrivateRoute = ({ component: Component, alternative = '/', ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) => (
      fakeAuth.isAuthenticated
        ? <Component {...props} />
        : <Redirect to={alternative} />
    )}
  />
);
