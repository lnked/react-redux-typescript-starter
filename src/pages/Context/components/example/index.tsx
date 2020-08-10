import * as React from 'react';
import styled from 'styled-components/macro';

import StateProvider from './store/provider';

import Left from './left';
import Right from './right';
import Center from './center';

const StyledContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border: 1px solid #ddd;
`;

export interface OuterProps {
  children?: React.ReactChild[] | React.ReactChild;
}

export function Example() {

  return (
    <StateProvider>
      <StyledContainer>
        <Left />
        <Center />
        <Right />
      </StyledContainer>
    </StateProvider>
  );

}

export default Example;
