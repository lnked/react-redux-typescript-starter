import * as React from 'react'
import styled from '@emotion/styled'

export interface Props {
  children?: JSX.Element | string;
}

const Button = styled.button`
  color: hotpink;
`
// children, onClick, className, disabled, active, ...attrs
export default ({ children, ...attrs }: Props) => <Button {...attrs}>{children}</Button>

// import { css } from 'emotion'

// const app = document.getElementById('root')
// const myClassName = css`
//   color: hotpink;
// `
// app.classList.add(myClassName)
