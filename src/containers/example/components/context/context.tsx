import * as React from 'react'

const initialState = {
  imageSource: '',
  isOpenModal: false,
  uploadImage: (source: string) => {
    return (initialState.imageSource = source)
  },
  toggleModal: () => {
    return (initialState.isOpenModal = !initialState.isOpenModal)
  },
}

export const Context = React.createContext(initialState)
