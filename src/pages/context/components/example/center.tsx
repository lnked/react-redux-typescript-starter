import * as React from 'react'
import styled from '@emotion/styled'

import { Input } from 'components'

import withContext from './store/hoc'

export interface P {
  children?: JSX.Element[] | JSX.Element | any;
}

const StyledBlock = styled.div`
  width: 32%;
  padding: 10px;
  border: 1px solid blue;
`

const StyledInput = styled(Input)`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

export function Center (props: any) {

  const { dispatch, left, right, center } = props

  return (
    <StyledBlock>
      <StyledInput
        value={left}
        label='Left'
        placeholder='LEFT'
        onChange={({ target: { value } }: any) => dispatch({ type: 'LEFT', value })}
      />
      <StyledInput
        value={right}
        label='Right'
        placeholder='RIGHT'
        onChange={({ target: { value } }: any) => dispatch({ type: 'RIGHT', value })}
      />
      <StyledInput
        value={center}
        label='Center'
        placeholder='CENTER'
        onChange={({ target: { value } }: any) => dispatch({ type: 'CENTER', value })}
      />
    </StyledBlock>
  )

}

export default withContext(Center)
