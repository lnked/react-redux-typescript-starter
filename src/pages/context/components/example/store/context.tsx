import * as React from 'react'

const initialState = {
  left: null,
  right: null,
  center: null,
}

const { Provider, Consumer } = React.createContext(initialState)

export {
  Provider,
  Consumer,
}
