import React, { useState } from 'react'
import styled from '@emotion/styled'

import Example from './components/example'

export interface P {
  initialCount?: number;
}

const StyledContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border: 1px solid #ddd;
`

function Context () {

  return (
    <StyledContainer>
      <Example />
    </StyledContainer>
  )

}

export default Context
