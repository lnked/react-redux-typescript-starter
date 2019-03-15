import * as React from 'react'
import styled from '@emotion/styled'

import Form from './components/form'

const Input = styled.input`
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
      <Form onSubmit={() => alert('submit')}>
        <Input name='name' value='xx' rules={['rule1']} validate={e => console.log(e)} placeholder='Name' />
        <Input name='value' placeholder='Value' />
        <Select name='value' placeholder='Value' />
      </Form>
    </div>
  )
}

export default Forms
