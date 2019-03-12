import * as React from 'react'

import { StyledError, StyledDetails } from './styles'

export interface P {
  children?: JSX.Element | JSX.Element[];
}

export interface S {
  error: Error | boolean;
  info: any;
}

export default class ErrorBoundary extends React.PureComponent<P, S> {
  state = {
    info: null,
    error: false,
  }

  componentDidCatch (error: Error | boolean, info: any) {
    this.setState({ error, info })
  }

  render () {
    const { error, info } = this.state

    if (error) {
      return (
        <StyledError>
          <h1>Something went wrong.</h1>

          <StyledDetails>
            {JSON.stringify(info)}
          </StyledDetails>
        </StyledError>
      )
    }

    return this.props.children
  }
}
