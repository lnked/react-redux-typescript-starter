import * as React from 'react'

import * as reducers from './reducers'

const initialState = {}

export const { Provider, Consumer } = React.createContext(initialState)

const ucfirst = (s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`

export const reducer = (state: any, action: any) => {
  const [ name, method ] = action.type.toLowerCase().split('/')

  const functionName = `reducer${ucfirst(method || name)}`

  if (typeof reducers[functionName] === 'function') {
    return reducers[functionName].apply(null, [state, action])
  }

  return { ...state }
}
