import * as React from 'react'
import styled from '@emotion/styled'

import Form from './components/form'

const StyledForm = styled(Form)`
  border: 1px solid lime;
`

const Input = styled.input`
  width: 100%;
  outline: 0;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
`

const Textarea = styled.textarea`
  width: 100%;
  outline: 0;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
`

const Select = styled.select`
  width: 100%;
  outline: 0;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
`

export interface P {
  initialCount?: number;
}

function Forms () {
  return (
    <div>
      <StyledForm onSubmit={() => alert('submit')}>
        {/* <Input name='text' value='xx' rules={['rule1']} validate={e => console.log(e)} placeholder='Name' /> */}
        <Input name='name' placeholder='Name' />

        <Input name='value' placeholder='Value' />

        <Input name='number' type='number' />

        <Input name='checkbox' type='checkbox' />

        <Input name='radio' type='radio' value={1} />
        <Input name='radio' type='radio' value={2} />
        <Input name='radio' type='radio' value={3} />

        <Textarea name='textarea' placeholder='Textarea' />
        <Select name='select'>
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
          <option value={3}>Option 3</option>
          <option value={4}>Option 4</option>
          <option value={5}>Option 5</option>
          <option value={6}>Option 6</option>
        </Select>

        <Select name='multiSelect' multiple>
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
          <option value={3}>Option 3</option>
          <option value={4}>Option 4</option>
          <option value={5}>Option 5</option>
          <option value={6}>Option 6</option>
        </Select>

        <button type='submit'>Submit</button>
      </StyledForm>
    </div>
  )
}

export default Forms
