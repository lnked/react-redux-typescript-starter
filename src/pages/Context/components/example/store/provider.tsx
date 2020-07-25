import * as React from 'react';

import { getState, initialState, Provider } from './context';

export interface OuterProps {
  children: any;
}

export interface InnerState {
  left?: any;
  right?: any;
  center?: any;
}

export default class StateProvider extends React.Component<OuterProps, InnerState> {

  state = initialState;

  dispatch = (action: any) => {
    this.setState(state => getState(state, action));
  }

  render() {
    const { children } = this.props;

    const props = {
      ...this.state,
      dispatch: this.dispatch,
    };

    return (
      <Provider value={props}>
        {children}
      </Provider>
    );
  }

}
