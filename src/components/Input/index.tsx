import * as React from 'react';

import useInputState from './useInputState';

import {
  Wrapper,
  Label,
  BaseInput,
  ResetButton,
  InputWrapper,
} from './styles';

import { OuterProps } from './types';

const Input: React.FC<OuterProps & React.HTMLProps<HTMLInputElement>> = ({
  label,
  error,
  focus,
  value,
  onChange,
  className,
  defaultValue,
  inputClassName,
  ...attrs
} = {}) => {
  const textInput = React.createRef<HTMLInputElement>();

  const pair = Math.random();

  const { touched, reset, ...stateProps } = useInputState({
    defaultValue,
    propsValue: value,
    handleChange: onChange,
  });

  React.useEffect(() => {
    focus && textInput.current!.focus();
  }, [textInput, value, focus]);

  return (
    <Wrapper className={className}>
      {label
        && <Label htmlFor={pair}>{label}</Label>
      }

      {attrs.required
        && <span>Required</span>
      }

      {/*
      <span>touched: {JSON.stringify(touched)}</span>
      */}

      <InputWrapper>
        <BaseInput
          ref={textInput}
          id={pair}
          {...attrs}
          {...stateProps}
          className={inputClassName}
        />

        <ResetButton type="button" onClick={reset}>
          Clear
        </ResetButton>
      </InputWrapper>

      {error && <span>{error}</span>}
    </Wrapper>
  );
};

Input.defaultProps = {
  type: 'text',
  label: '',
  error: '',
  value: '',
  focus: false,
};

export default Input;
