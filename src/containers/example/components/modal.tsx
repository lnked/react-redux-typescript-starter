import * as React from 'react'
// import ReactCrop from 'react-image-crop'
// import Modal from 'react-modal'

import withContext from './context/hoc'

class ModalEditor extends React.Component<{}, {}> {

  static defaultProps = {
    isOpenModal: false,
    imageSource: null,
  }

  state = {
    src: null,
    croppedImageUrl: null,
    crop: {
      aspect: 1,
      width: 50,
      x: 0,
      y: 0,
    },
  }

  onCropComplete = (crop, pixelCrop) => this.makeClientCrop(crop, pixelCrop)

  onImageLoaded = image => {
    this.imageRef = image
  }

  onCropChange = crop => this.setState({ crop })

  getCroppedImg = (image, pixelCrop) => {
    const canvas = document.createElement('canvas')
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height
    const context = canvas.getContext('2d')

    context.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    )

    return new Promise(resolve => {
      this.dataURL = canvas.toDataURL('image/jpeg')
      resolve(this.dataURL)

      // canvas.toBlob(blob => {
      //   blob.name = fileName
      //   resolve(blob)
      // }, 'image/jpeg')

      // canvas.toBlob((blob) => {
      //   if (!blob) {
      //     return
      //   }

      //   window.URL.revokeObjectURL(this.fileUrl)

      //   console.log(blob)

      //   this.fileUrl = window.URL.createObjectURL(blob)

      //   resolve(this.fileUrl)
      // }, 'image/jpeg')
    })
  }

  makeClientCrop = async (crop, pixelCrop) => {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef, pixelCrop,
      )

      this.setState({ croppedImageUrl })
    }
  }

  dataURItoBlob = dataURI => {
    const splitted = dataURI.split(',')

    // convert base64/URLEncoded data component to raw binary data held in a string
    const length = splitted[0].indexOf('base64') >= 0

    const byteString = length
      ? atob(splitted[1])
      : unescape(splitted[1])

    // separate out the mime component
    const mimeString = splitted[0].split(':')[1].split('')[0]

    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length)
    for (let i = 0 i < byteString.length i++) {
      ia[i] = byteString.charCodeAt(i)
    }

    return new Blob([ia], { type: mimeString })
  }

  handleSuccess = response => {
    console.log(response)

    // const { file_url } = response
    // const {
    //   options: {
    //     targets = [],
    //   },
    // } = this.props

    // if (targets.length > 0) {
    //   targets.forEach((node) => {
    //     document.querySelector(node).setAttribute('src', file_url)
    //   })
    // }

    this.props.toggleModal()
  }

  handleFailed = response => {
    console.log(response)
  }

  asyncRequests = async file => {
    const {
      options: {
        strategySlug,
        requiredInputs = {},
      },
    } = this.props

    const url = '/api_web/file_uploads'
    const method = 'POST'

    const data = new FormData()
    data.append('file', file, 'image.jpg')
    data.append('strategy_slug', strategySlug)
    data.append('required_inputs', JSON.stringify(requiredInputs))

    const ajax = await $.ajax({
      data,
      method,
      url,
      cache: false,
      contentType: false,
      processData: false,
    })

    return { ...ajax, name: file.name }
  }

  handleSubmit = () => {
    const blob = this.dataURItoBlob(this.dataURL)

    this.asyncRequests(blob)
      .then(this.handleSuccess)
      .catch(this.handleFailed)
  }

  renderPreview = (title, size = 'small') => {
    const { croppedImageUrl } = this.state

    return (
      <div className='crop-modal__preview__item'>
        <div className='crop-modal__preview__title'>{title}</div>
        <img src={croppedImageUrl} className={`crop-modal__cropped-${size}`} alt='' />
      </div>
    )
  }

  render () {
    const { crop, croppedImageUrl } = this.state
    const { isOpenModal, imageSource, toggleModal } = this.props

    if (!isOpenModal) {
      return null
    }

    return (
      <Modal
        className='modal-dialog crop-modal__form'
        isOpen={isOpenModal}
        closeTimeoutMS={150}
        onRequestClose={toggleModal}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={false}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={toggleModal}
            >
              <span aria-hidden='true'>&times</span>
            </button>
            <h4 className='modal-title'>Crop your photo using the dotted box below</h4>
          </div>

          <div className='crop-modal__body'>
            <div className='crop-modal__large'>
              {imageSource && (
                <ReactCrop
                  src={imageSource}
                  crop={crop}
                  className='crop-modal__image'
                  onImageLoaded={this.onImageLoaded}
                  onComplete={this.onCropComplete}
                  onChange={this.onCropChange}
                  keepSelection
                />
              )}
              {/* {imageSource && imageSource.file_url && (
                <ReactCrop
                  src={imageSource.file_url}
                  crop={crop}
                  className='crop-modal__image'
                  onImageLoaded={this.onImageLoaded}
                  onComplete={this.onCropComplete}
                  onChange={this.onCropChange}
                  keepSelection
                />
              )} */}
            </div>

            <div className='crop-modal__preview'>
              {croppedImageUrl && this.renderPreview('Small Preview')}
              {croppedImageUrl && this.renderPreview('Large Preview', 'large')}
            </div>
          </div>

          <footer className='modal-footer'>
            <button type='button' className='btn btn-default' data-dismiss='modal' onClick={toggleModal}>Close</button>
            <button type='button' className='btn btn-primary' onClick={this.handleSubmit}>Crop Image</button>
          </footer>
        </div>
      </Modal>
    )
  }
}

export default withContext(ModalEditor)
