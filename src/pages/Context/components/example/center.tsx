import * as React from 'react';
import styled from 'styled-components/macro';

import { Input } from 'components';

import withContext from './store/hoc';

export interface OuterProps {
  left?: any;
  right?: any;
  center?: any;
  dispatch?: any;
  children?: React.ReactChild[] | React.ReactChild;
}

const StyledBlock = styled.div`
  width: 32%;
  padding: 10px;
  border: 1px solid blue;
`;

const StyledInput = styled(Input)`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function Center(props: OuterProps) {
  const { dispatch, left, right, center } = props;

  const handleChange = (type: string, { target: { value } }: ChangeEvent) => {
    dispatch({ type, value });
  };

  return (
    <StyledBlock>
      <StyledInput
        value={left}
        label="Left"
        placeholder="LEFT"
        onChange={(e: ChangeEvent) => handleChange('LEFT', e)}
      />
      <StyledInput
        value={right}
        label="Right"
        placeholder="RIGHT"
        onChange={(e: ChangeEvent) => handleChange('RIGHT', e)}
      />
      <StyledInput
        value={center}
        label="Center"
        placeholder="CENTER"
        onChange={(e: ChangeEvent) => handleChange('CENTER', e)}
      />
    </StyledBlock>
  );
}

export default withContext(Center);
