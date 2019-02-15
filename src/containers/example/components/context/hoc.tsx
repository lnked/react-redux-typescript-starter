import * as React from 'react'

import CropContext from './context'

export default function withContext (Component) {
  return function ContextComponent (props) {
    return (
      <CropContext.Consumer>
        {context => <Component {...props} {...context} />}
      </CropContext.Consumer>
    )
  }
}
