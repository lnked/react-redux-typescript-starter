import PropTypes from 'prop-types';
import * as React from 'react'

import withContext from './context/hoc'

class UploadButton extends React.Component<{}, {}> {
  static propTypes = {
    options: PropTypes.object,
    toggleModal: PropTypes.func,
    uploadImage: PropTypes.func,
  }

  state = {
    file: null,
  }

  handleFileUploadDelete = () => {
    console.log('delete');
  }

  handleChange = (e) => {
    const reader = new FileReader();
    const { files } = e.target;

    const file = (files && files[0]) || null;

    reader.onload = ev => this.props.uploadImage(ev.target.result);

    reader.readAsDataURL(file);

    this.setState({ file }, this.props.toggleModal);
  }

  render() {
    const { file } = this.state;
    const { options: { accept, buttonText, inputName } } = this.props;

    return (
      <div className="crop__wrapper">
        <div className="crop__upload-button">
          <label className="crop__upload-trigger">
            {buttonText}
            <input
              type="file"
              accept={accept}
              name={inputName}
              className="crop__file-input"
              onChange={this.handleChange}
            />
          </label>

          {file && file.name &&
            <span className="crop__file-name">{file.name}</span>
          }
        </div>
      </div>
    );
  }
}

export default withContext(UploadButton);
