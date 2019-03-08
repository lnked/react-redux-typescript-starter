import * as React from 'react'

import { reducer, Provider } from './context'

export interface Props {
  children: any;
}

export interface State {
  left?: any;
  right?: any;
  center?: any;
}

export default class StateProvider extends React.Component<Props, State> {

  state = {
    left: '',
    right: '',
    center: '',
    dispatch: (action: any) => {
      this.setState(state => reducer(state, action))
    }
  }

  render () {
    const { children } = this.props

    const props = {
      ...this.state,
    }

    return (
      <Provider value={props}>
        {children}
      </Provider>
    )
  }

}
