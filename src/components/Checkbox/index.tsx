import * as React from 'react';

import { StyledLabel, StyledInput, StyledBox, StyledText } from './styles';

export interface OuterProps {
  checked?: boolean;
}

export interface InnerState {
  isChecked: boolean;
}

export class Checkbox extends React.Component<OuterProps, InnerState> {
  static displayName = 'Checkbox';

  static defaultProps = {
    checked: false,
  };

  state = {
    isChecked: this.props.checked || false,
  };

  onChange = () => {
    this.setState(state => ({ isChecked: !state.isChecked }));
  }

  render() {
    const { isChecked } = this.state;

    return (
      <StyledLabel>
        <StyledInput
          type="checkbox"
          value={1}
          checked={isChecked}
          onChange={this.onChange}
        />

        <StyledBox />

        <StyledText>
          {isChecked ? 'checked' : 'UnChecked'}
        </StyledText>
      </StyledLabel>
    );
  }
}
