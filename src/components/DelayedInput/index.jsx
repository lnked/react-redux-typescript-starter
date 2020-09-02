import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

export class DelayedInput extends Component {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    delayFunction: PropTypes.func.isRequired,
    delayTime: PropTypes.number,
  };

  static defaultProps = {
    /** Default delay time - millisecond */
    delayTime: 500,
    type: 'text',
  };

  constructor(props) {
    super(props);

    const { delayFunction, delayTime } = props;
    this.debounceDelayFunction = debounce(delayFunction, delayTime);
  }

  render() {
    const { type, name, className, placeholder, value, defaultValue, onChange } = this.props;

    const props = {};

    if (value) {
      props.value = value;
    }

    if (defaultValue) {
      props.defaultValue = defaultValue;
    }

    return (
      <input
        {...props}
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        onInput={this.debounceDelayFunction}
      />
    );
  }
}
