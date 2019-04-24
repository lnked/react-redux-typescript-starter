import * as React from 'react';

import useInputState from './useInputState';

import {
  Wrapper,
  Label,
  StyledInput,
  ResetButton,
  InputWrapper,
} from './styles';

import { OuterProps } from './types';

const Input: React.FC<OuterProps> = (props: OuterProps) => {
  const textInput = React.createRef<HTMLInputElement>();

  const {
    label,
    error,
    focus,
    className,
    inputClassName,
    ...attrs
  } = props;

  const { touch, reset, ...stateProps } = useInputState({
    defaultValue: props.value,
    handleChange: props.onChange,
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

      <div>touch: {JSON.stringify(touch)}</div>

      <InputWrapper>
        <StyledInput
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
