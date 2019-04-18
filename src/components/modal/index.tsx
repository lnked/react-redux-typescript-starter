import * as React from 'react'
import { createPortal } from 'react-dom'

export interface OuterProps {
  children: React.ReactChild[];
}

class Modal extends React.Component<OuterProps, {}> {

  element: HTMLElement | null = null

  componentDidMount () {
    this.element = document.createElement('div')
    document.body.appendChild(this.element)
  }

  render () {
    const { children } = this.props

    if (!this.element) {
      return null
    }

    return createPortal(children, this.element)
  }

}

export default Modal
