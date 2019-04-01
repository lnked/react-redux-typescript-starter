import * as React from 'react'
import styled from '@emotion/styled'

import withContext from './store/hoc'

export interface P {
  children?: JSX.Element[] | JSX.Element | any;
}

const StyledBlock = styled.div`
  width: 32%;
  padding: 10px;
  font-size: 1.6rem;
  border: 1px solid gold;
`

const StyledInput = styled.input`
  width: 100%;
  outline: 0;
  border: 1px solid #ddd;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

export function Right (props: any) {

  const { dispatch, left, right, center } = props

  return (
    <StyledBlock>
      <div>xxx</div>
      <StyledInput
        value={left}
        placeholder="LEFT"
        onChange={({ target: { value } }: any) => dispatch({ type: 'change/LEFT', value })}
      />
      <StyledInput
        value={right}
        placeholder="RIGHT"
        onChange={({ target: { value } }: any) => dispatch({ type: 'change/RIGHT', value })}
      />
      <StyledInput
        value={center}
        placeholder="CENTER"
        onChange={({ target: { value } }: any) => dispatch({ type: 'CENTER', value })}
      />
    </StyledBlock>
  )

}

export default withContext(Right)
