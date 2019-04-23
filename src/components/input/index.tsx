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

  React.useEffect(() => {
    focus && textInput.current!.focus();

    return () => {
      // component will unmount code here
    };
  }, []);

  const { value, onChange } = useInputState({
    defaultValue: props.value,
    handleChange: props.onChange,
  });

  return (
    <Wrapper className={className}>
      {label
        && <Label>{label}</Label>
      }

      {attrs.required
        && <span>Required</span>
      }

      <StyledInput
        {...attrs}
        ref={textInput}
        name={name}
        value={value}
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
