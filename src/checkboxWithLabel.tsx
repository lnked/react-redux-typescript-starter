import * as React from 'react'

export interface Props {
  labelOn: string;
  labelOff: string;
}

export interface State {
  isChecked: boolean;
}

export class CheckboxWithLabel extends React.Component<Props, State> {

  static defaultProps = {
    labelOn: 'On',
    labelOff: 'Off',
  }

  state = {
    isChecked: false,
  }

  onChange = () => {
    this.setState(state => ({ isChecked: !state.isChecked }))
  }

  render () {
    const { isChecked } = this.state
    const { labelOn, labelOff } = this.props

    return (
      <label>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={this.onChange}
        />

        {isChecked ? labelOn : labelOff}
      </label>
    )
  }

}
