import * as React from 'react'
// import Raven from 'raven-js'

import { StyledError, StyledDetails } from './styles'

export interface P {
  children: JSX.Element | JSX.Element[] | string;
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

  static getDerivedStateFromError (error: Error | boolean) {
    return { hasError: true, info: error }
  }

  componentDidCatch (error: Error | boolean, info: any) {
    this.setState({ error, info }, () => {
      // Raven.captureException(error, { extra: info })
    })
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
