import styled from 'styled-components';
import { Input as InputComponent } from 'components';

export const Input = styled(InputComponent)`
  clear: both;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  outline: 0;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
`;

export const Select = styled.select`
  width: 100%;
  outline: 0;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
`;
