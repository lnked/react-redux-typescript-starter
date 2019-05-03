import * as React from 'react';

import {
  STORE_UI,
  STORE_APP,
} from 'settings';

export interface OuterProps {
  [STORE_UI]: any;
  [STORE_APP]: any;
}

export const Store = React.createContext({
  [STORE_UI]: {},
  [STORE_APP]: {},
});

export class Provider extends React.Component<OuterProps, any> {
  render () {
    const { children, ...props } = this.props;

    return (
      <Store.Provider value={props}>
        {children}
      </Store.Provider>
    );
  }
}

export const Consumer = Store.Consumer;
