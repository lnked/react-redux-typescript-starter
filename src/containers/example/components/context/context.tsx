import * as React from 'react'

const CropContext = React.createContext({
  imageSource: null,
  isOpenModal: false,
  uploadImage: () => {},
  toggleModal: () => {},
});

export default CropContext;
