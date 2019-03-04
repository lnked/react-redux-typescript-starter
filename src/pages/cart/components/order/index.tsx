import * as React from 'react'
import styled from '@emotion/styled'
import MaskedInput from 'react-text-mask'

import withContext from '../store/hoc'

export interface P {
  children?: JSX.Element[] | JSX.Element | any;
}

const StyledBlock = styled.div`
  width: 32%;
  padding: 10px;
  border: 1px solid blue;
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
`

export function Order (props: any) {

  const { dispatch, left, right, center } = props

  return (
    <StyledBlock>
      Фото Товары Количество Стоимость

      <img src='http://www.to2ko.ru/upload_dir/f251e28a_4820_sm_crop.jpg' alt='' />
      <img src='http://www.to2ko.ru/upload_dir/2110c843_7732_sm_crop.jpg' alt='' />
      <img src='http://www.to2ko.ru/upload_dir/add8e305_16a6_sm_crop.jpg' alt='' />
      <img src='http://www.to2ko.ru/upload_dir/0bbf7c4c_4c5f_sm_crop.jpg' alt='' />

      <MaskedInput
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholder='Enter a phone number'
        // guide={false}
        // onBlur={() => {}}
        // onChange={() => {}}
        render={(ref: any, props: any) => (
          <StyledInput innerRef={ref} {...props} />
        )}
      />

      <StyledInput
        value={left}
        placeholder='LEFT'
        onChange={({ target: { value } }: any) => dispatch({ type: 'LEFT', value })}
      />
      <StyledInput
        value={right}
        placeholder='RIGHT'
        onChange={({ target: { value } }: any) => dispatch({ type: 'RIGHT', value })}
      />
      <StyledInput
        value={center}
        placeholder='CENTER'
        onChange={({ target: { value } }: any) => dispatch({ type: 'CENTER', value })}
      />
    </StyledBlock>
  )

}

export default withContext(Order)
