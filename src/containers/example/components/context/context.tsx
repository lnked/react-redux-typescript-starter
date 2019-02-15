import * as React from 'react'

const CropContext = React.createContext({
  imageSource: null,
  isOpenModal: false,
  uploadImage: () => {
    console.log('uploadImage')
  },
  toggleModal: () => {
    console.log('toggleModal')
  },
})

export default CropContext
