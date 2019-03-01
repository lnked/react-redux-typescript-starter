import * as React from 'react'
import styled from '@emotion/styled'

import withContext from './store/hoc'
import StateProvider from './store/provider'

import Left from './left'
import Right from './right'
import Center from './center'

const StyledContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border: 1px solid #ddd;
`

export interface P {
  children?: JSX.Element[] | JSX.Element | any;
}

export function Example () {

  return (
    <StateProvider>
      <StyledContainer>
        <Left />
        <Right />
        <Center />
      </StyledContainer>
    </StateProvider>
  )

}

export default Example
