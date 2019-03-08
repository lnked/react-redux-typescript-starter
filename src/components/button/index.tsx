import * as React from 'react'
import styled from '@emotion/styled'

export interface Props {
  children?: JSX.Element | string;
}

const Button = styled.button`
  /* color: #fff; */
  /* background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.045);
  box-shadow: 0 2px 0 rgba(0,0,0,0.045);
  appearance: button; */

  /* &:hover {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
  } */

  outline: 0;
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0,0,0,0.015);
  cursor: pointer;
  transition: all .2s cubic-bezier(.645, .045, .355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0,0,0,0.65);
  background-color: #fff;
  border-color: #d9d9d9;

  &:hover {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff;
  }

  &:active {
    color: #096dd9;
    background-color: #fff;
    border-color: #096dd9;
    text-decoration: none;
    background: #fff;
  }
`

// children, onClick, className, disabled, active, ...attrs
export default ({ children, ...attrs }: Props) => <Button {...attrs}>{children}</Button>

// import { css } from 'emotion'

// const app = document.getElementById('root')
// const myClassName = css`
//   color: hotpink;
// `
// app.classList.add(myClassName)
