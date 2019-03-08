import { ucFirst } from 'utils'
import * as reducers from './reducers'

const getState = (state: any, action: any) => {
  const [ name, method ] = action.type.toLowerCase().split('/')

  const fn = `reducer${ucFirst(method || name)}`

  if (typeof reducers[fn] === 'function') {
    return reducers[fn].apply(null, [state, action])
  }

  return { ...state }
}

export default getState
