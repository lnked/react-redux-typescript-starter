import * as React from 'react'

import getState from './reducers/get-state'

const initialState = {
  left: '',
  right: '',
  center: '',
}

export interface Props {
  children: any;
}

export interface State {
  left?: any;
  right?: any;
  center?: any;
}

export const Context = React.createContext(initialState as State)

export const Consumer = Context.Consumer

export default class Provider extends React.Component<Props, State> {

  state = initialState

  dispatch = (action: any) => {
    this.setState(state => getState(state, action))
  }

  render () {
    const { children } = this.props

    const store = {
      ...this.state,
      dispatch: this.dispatch,
    }

    return (
      <Context.Provider value={store}>
        {children}
      </Context.Provider>
    )
  }

}
