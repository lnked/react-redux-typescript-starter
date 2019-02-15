import * as React from 'react'

import { Context } from './context'

export interface Props {
  options: any;
  children: any;
}

export interface State {
  isOpenModal: boolean;
  imageSource: string | null;
}

class Provider extends React.Component<Props, State> {

  state = {
    imageSource: '',
    isOpenModal: false,
  }

  // uploadImage = (imageSource: string) => this.setState({ imageSource, isOpenModal: true })

  // toggleModal = () => this.setState(state => ({ isOpenModal: !state.isOpenModal }))

  render () {
    const { options, children } = this.props

    const props = {
      ...this.state,
      options,
      // toggleModal: this.toggleModal,
      // uploadImage: this.uploadImage,
    }

    return (
      <Context.Provider value={props}>
        {children}
      </Context.Provider>
    )
  }

}

export default Provider
