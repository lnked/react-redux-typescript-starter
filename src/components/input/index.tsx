import * as React from 'react'

import {
  Wrapper,
  Label,
  StyledInput,
} from './styles'

export interface P extends React.HTMLProps<HTMLInputElement> {
  type?: string;
  label?: string;
  error?: string;
  value?: string | number | null;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<P> = ({ label, value, className, onChange, inputClassName, error, ...attrs }) => {
  const textInput = React.createRef<HTMLInputElement>()

  React.useEffect(() => {
    textInput.current!.focus()
  }, [])

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
        value={value}
        onInput={onChange}
        onChange={onChange}
        className={inputClassName}
      />

      {error
        && <span>{error}</span>
      }
    </Wrapper>
  )
}

Input.defaultProps = {
  type: 'text',
  label: '',
  error: '',
  value: '',
}

export default Input
