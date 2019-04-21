import * as React from 'react';

import {
  Wrapper,
  Label,
  StyledInput,
} from './styles';

export interface OuterProps {
  name?: string;
  type?: string;
  label?: string;
  error?: string;
  value?: string | number | null;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<OuterProps> = (props: OuterProps) => {
  const textInput = React.createRef<HTMLInputElement>();

  const {
    name,
    label,
    value,
    error,
    onChange,
    className,
    inputClassName,
    ...attrs,
  } = props;

  React.useEffect(() => {
    // component did mount code here
    // textInput.current!.focus()

    return () => {
      // component will unmount code here
    };
  },              []);

  // React.useEffect(() => {
  //   return () => {
  //     // component will update or unmount code here
  //   }
  // })

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
        onInput={onChange}
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
};

export default Input;
