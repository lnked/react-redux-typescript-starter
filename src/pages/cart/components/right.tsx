import * as React from 'react';
import styled from 'styled-components';

import withContext from './store/hoc';

export interface OuterProps {
  children?: React.ReactChild[] | React.ReactChild;
}

const StyledBlock = styled.div`
  width: 32%;
  padding: 10px;
  font-size: 1.6rem;
  border: 1px solid gold;
`;

const StyledInput = styled.input`
  width: 100%;
  outline: 0;
  border: 1px solid #ddd;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function Right(props: any) {

  const { dispatch, left, right, center } = props;

  const handleChange = (type: string, { target: { value } }: ChangeEvent) =>
    dispatch({ type, value });

  return (
    <StyledBlock>
      <div>xxx</div>
      <StyledInput
        value={left}
        placeholder="LEFT"
        onChange={(e: ChangeEvent) => handleChange('change/LEFT', e)}
      />
      <StyledInput
        value={right}
        placeholder="RIGHT"
        onChange={(e: ChangeEvent) => handleChange('change/RIGHT', e)}
      />
      <StyledInput
        value={center}
        placeholder="CENTER"
        onChange={(e: ChangeEvent) => handleChange('CENTER', e)}
      />
    </StyledBlock>
  );

}

export default withContext(Right);
