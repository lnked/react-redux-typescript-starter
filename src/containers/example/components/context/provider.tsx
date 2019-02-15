import * as React from 'react'

import CropContext from './context'

class Provider extends React.Component<{}, {}> {

  state = {
    isOpenModal: false,
    imageSource: null,
  }

  uploadImage = imageSource => this.setState({ imageSource, isOpenModal: true })

  toggleModal = () => this.setState(state => ({ isOpenModal: !state.isOpenModal }))

  render () {
    const { options, children } = this.props

    return (
      <CropContext.Provider
        value={{
          ...this.state,
          options,
          toggleModal: this.toggleModal,
          uploadImage: this.uploadImage,
        }}
      >
        {children}
      </CropContext.Provider>
    )
  }

}

export default Provider
