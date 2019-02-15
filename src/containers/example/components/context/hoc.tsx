import * as React from 'react'

import { Context } from './context'

export const withContext = <P extends object>(Component: React.ComponentType<P>) => {
  return function ContextComponent (props: P) {
    return (
      <Context.Consumer>
        {context => <Component {...props as P} {...context} />}
      </Context.Consumer>
    )
  }
}
