import * as React from 'react'

import { StyledLabel, StyledInput, StyledBox, StyledText } from './styles'

export interface Props {
  labelOn: string;
  labelOff: string;
}

export interface State {
  isChecked: boolean;
}

export default class CheckboxWithLabel extends React.Component<Props, State> {

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
      <StyledLabel>
        <StyledInput
          type='checkbox'
          checked={isChecked}
          onChange={this.onChange}
        />

        <StyledBox />

        <StyledText>
          {isChecked ? labelOn : labelOff}
        </StyledText>
      </StyledLabel>
    )
  }

}
