import * as React from 'react'

import {
  Wrapper,
  Label,
  StyledInput,
} from './styles'

export interface P extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<P> = ({ label, className, inputClassName, error, ...attrs }) => {
  const textInput = React.createRef<HTMLInputElement>()

  React.useEffect(() => {
    textInput.current!.focus()
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => console.error('onChange: ', e.target.value)

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
        onInput={onChange}
        className={inputClassName}
      />

      {error
        && <span>{error}</span>
      }
    </Wrapper>
  )
}

Input.defaultProps = {
  label: '',
  error: '',
}

export default Input
