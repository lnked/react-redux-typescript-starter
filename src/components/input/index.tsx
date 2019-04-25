import * as React from 'react';

import useInputState from './useInputState';

import {
  Wrapper,
  Label,
  BaseInput,
  ResetButton,
  InputWrapper,
} from './styled';

import { OuterProps } from './types';

const Input: React.FC<OuterProps> = (props: OuterProps) => {
  const textInput = React.createRef<HTMLInputElement>();

  const {
    label,
    error,
    focus,
    value,
    className,
    defaultValue,
    inputClassName,
    ...attrs
  } = props;

  const { touched, reset, ...stateProps } = useInputState({
    defaultValue,
    handleChange: props.onChange,
    propsValue: value,
  });

  React.useEffect(() => {
    focus && textInput.current!.focus();
  }, []);

  return (
    <Wrapper className={className}>
      {label
        && <Label>{label}</Label>
      }

      {attrs.required
        && <span>Required</span>
      }

      <div>touched: {JSON.stringify(touched)}</div>

      <InputWrapper>
        <BaseInput
          ref={textInput}
          {...attrs}
          {...stateProps}
          className={inputClassName}
        />

        <ResetButton type="button" onClick={reset} />
      </InputWrapper>

      {error
        && <span>{error}</span>
      }
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
