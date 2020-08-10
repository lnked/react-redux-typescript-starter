import styled from 'styled-components/macro';

export const Wrapper = styled.pre`
  width: 100%;
  margin: 0;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
