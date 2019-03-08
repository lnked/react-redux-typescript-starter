import React, { useState } from 'react'
import styled from '@emotion/styled'

export interface P {
  value?: number;
}

const StyledQuantity = styled.div`
  border: 1px solid lime;
`

const Paragraph = styled.p`
  color: green;
  margin: 0;
  font-size: 1.8rem;
`

const StylesInput = styled.input`
  width: 30px;
  padding: 0 5px;
  outline: none;
  text-align: center;
  appearance: none;
  border: 1px solid #ddd;
`

const Button = styled.button`
  padding: 5px 10px;
  background: #eee;
  border: 1px solid rgba(#000, .1);
  border-radius: 2px;
  font: inherit;
  color: #000;
  outline: 0;
  cursor: pointer;
  text-shadow: 0 1px 0 rgba(#000, .3), 0 1px 1px rgba(#000, .2);
`

function Quantity ({ value = 0 }: P) {

  const [count, setCount] = useState(value)

  return (
    <StyledQuantity>
      <Paragraph>{count}</Paragraph>
      <Button onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
      <StylesInput
        type='text'
        value={count}
        onChange={(e: any) => setCount(e.targer.value)}
      />
      <Button onClick={() => setCount(0)}>x</Button>
      <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
    </StyledQuantity>
  )

}

export default Quantity
