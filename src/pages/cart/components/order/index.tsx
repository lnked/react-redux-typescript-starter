import * as React from 'react';
import styled from '@emotion/styled';
import MaskedInput from 'react-maskedinput';

import { Stepper, Button } from 'components';

import withContext from '../store/hoc';

export interface OuterProps {
  children?: React.ReactChild[] | React.ReactChild;
}

const Box = styled.div`
  padding: 10px;
  margin-bottom: 10px;
`;

const StyledBlock = styled.div`
  width: 32%;
  padding: 10px;
  border: 1px solid blue;
`;

const StyledMaskedInput = styled(MaskedInput)`
  width: 100%;
  outline: 0;
  height: 32px;
  padding: 0 10px;
  font-size: 1.3rem;
  box-sizing: border-box;
  border: 1px solid #ddd;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const StyledInput = styled.input`
  width: 100%;
  outline: 0;
  height: 32px;
  padding: 0 10px;
  font-size: 1.3rem;
  box-sizing: border-box;
  border: 1px solid #ddd;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function Order(props: any) {

  const { dispatch, left, right, center } = props;

  const handleChange = (type: string, { target: { value } }: ChangeEvent) =>
    dispatch({ type, value });

  return (
    <StyledBlock>
      Фото Товары Количество Стоимость

      <Box>
        <Stepper value={1} />
      </Box>

      <Box>
        <Button>Next</Button>
      </Box>

      {/* <img src='http://www.to2ko.ru/upload_dir/f251e28a_4820_sm_crop.jpg' alt='' /> */}
      {/* <img src='http://www.to2ko.ru/upload_dir/2110c843_7732_sm_crop.jpg' alt='' /> */}
      {/* <img src='http://www.to2ko.ru/upload_dir/add8e305_16a6_sm_crop.jpg' alt='' /> */}
      {/* <img src='http://www.to2ko.ru/upload_dir/0bbf7c4c_4c5f_sm_crop.jpg' alt='' /> */}

      <StyledMaskedInput
        mask="(111) 111-11-11"
        placeholder="Enter a phone number"
      />

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

export default withContext(Order);
