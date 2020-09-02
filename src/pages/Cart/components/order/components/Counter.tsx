import React, { useState } from 'react';
import styled from 'styled-components/macro';

export interface OuterProps {
  initialCount?: number;
}

const StyledCounter = styled.div`
  border: 1px solid lime;
`;

const Paragraph = styled.p`
  color: green;
  margin: 0;
  font-size: 1.8rem;
`;

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
`;

export function Counter({ initialCount = 0 }: OuterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <StyledCounter>
      <Paragraph>{count}</Paragraph>
      <Button onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
      <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
    </StyledCounter>
  );
}
