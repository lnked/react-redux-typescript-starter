import * as React from 'react';

import useInputState from './useInputState';

import {
  Wrapper,
  Label,
  StyledInput,
} from './styles';

import { OuterProps } from './types';

const Input: React.FC<OuterProps> = (props: OuterProps) => {
  const textInput = React.createRef<HTMLInputElement>();

  const {
    name,
    label,
    error,
    focus,
    className,
    inputClassName,
    ...attrs
  } = props;

  const { touch, value, onChange, onFocus, onBlur } = useInputState({
    defaultValue: props.value,
    handleChange: props.onChange,
  });

  React.useEffect(() => {
    focus && textInput.current!.focus();
  }, [value]);

  return (
    <Wrapper className={className}>
      {label
        && <Label>{label}</Label>
      }

      {attrs.required
        && <span>Required</span>
      }

      <div>touch: {JSON.stringify(touch)}</div>

      <StyledInput
        {...attrs}
        ref={textInput}
        name={name}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        className={inputClassName}
      />

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
