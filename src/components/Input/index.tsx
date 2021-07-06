import { useEffect, createRef, FC } from 'react';

import { Wrapper, Label, BaseInput, ResetButton, InputWrapper } from './style';
import { useInputState } from './useInputState';
import { OuterProps } from './types';

export const Input: FC<OuterProps> = ({
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
  const textInput = createRef<HTMLInputElement>();

  const pair = `field-${Math.random()}`;

  const { touched, reset, ...stateProps } = useInputState({
    defaultValue,
    propsValue: value,
    handleChange: onChange,
  });

  useEffect(() => {
    if (focus) {
      textInput.current?.focus();
    }
  }, [textInput, value, focus]);

  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={pair}>{label}</Label>}

      {attrs.required && <span>Required</span>}

      <span>touched: {JSON.stringify(touched)}</span>

      <InputWrapper>
        <BaseInput
          // {...attrs}
          {...stateProps}
          id={pair}
          ref={textInput}
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

Input.displayName = 'Input';

Input.defaultProps = {
  type: 'text',
  label: '',
  error: '',
  value: '',
  focus: false,
};
