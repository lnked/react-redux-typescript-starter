import * as React from 'react'

import withContext from './context/hoc'
import UploadButton from './upload-button'

class Container extends React.Component<{}, {}> {

  handleFileUploadChange = (files: any) => this.props.uploadImage(files.pop())

  render () {
    return (
      <UploadButton />
    )
  }

}

export default withContext(Container);
