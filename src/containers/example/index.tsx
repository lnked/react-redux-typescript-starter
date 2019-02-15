import * as React from 'react'

import Provider from './components/context/provider'
import Container from './components/container'
import Modal from './components/modal'

export default function Example (props: any) {
  return (
    <Provider options={props}>
      <Modal />
      <Container />
    </Provider>
  )
}
