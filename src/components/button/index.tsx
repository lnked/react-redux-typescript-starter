import * as React from 'react'

import { StyledButton } from './styles'

export interface OuterProps {
  label?: React.ReactChild[] | string;
  children?: React.ReactChild[] | string;
}

const Button: React.FC<OuterProps> = ({ children, label, ...props }: OuterProps) => (
  <StyledButton {...props}>
    {children || label}
  </StyledButton>
)

Button.defaultProps = {
  children: '',
}

export default Button
