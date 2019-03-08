import * as React from 'react'

import { ucFirst } from 'utils'
import * as reducers from './reducers'

const initialState = {}

export const { Provider, Consumer } = React.createContext(initialState)

export const reducer = (state: any, action: any) => {
  const [ name, method ] = action.type.toLowerCase().split('/')

  const fn = `reducer${ucFirst(method || name)}`

  if (typeof reducers[fn] === 'function') {
    return reducers[fn].apply(null, [state, action])
  }

  return { ...state }
}
