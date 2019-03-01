import * as React from 'react'

import withContext from './store/hoc'

export interface P {
  children?: JSX.Element[] | JSX.Element | any;
}

export function Example (props: any) {

  return (
    <div>
      <div>{JSON.stringify(props)}</div>
    </div>
  )

}

export default withContext(Example)
