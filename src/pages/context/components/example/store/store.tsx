import * as React from 'react'

import { Provider } from './context'

export interface Props {
  children: any;
}

export interface State {
  value?: any;
}

export default class Store extends React.Component<Props, State> {

  state = {}

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
