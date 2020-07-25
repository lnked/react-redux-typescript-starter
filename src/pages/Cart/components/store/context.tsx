import * as React from 'react';

import getState from './get-state';

const initialState = {
  left: '',
  right: '',
  center: '',
};

export interface OuterProps {
  children: any;
}

export interface InnerState {
  left?: any;
  right?: any;
  center?: any;
}

export const Context = React.createContext(initialState as InnerState);

export const Consumer = Context.Consumer;

export default class Provider extends React.Component<OuterProps, InnerState> {

  state = initialState;

  dispatch = (action: any) => {
    this.setState(state => getState(state, action));
  }

  render() {
    const { children } = this.props;

    const store = {
      ...this.state,
      dispatch: this.dispatch,
    };

    return (
      <Context.Provider value={store}>
        {children}
      </Context.Provider>
    );
  }

}
