import * as React from 'react'

import { Form, Input, Textarea, Select } from './styles'

export interface P {
  initialCount?: number;
}

export interface HandlerProps {
  handleClick: (e: React.ChangeEvent<any>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  children: (handleClick: any, handleChange: any) => Element;
}

class Handler extends React.Component<HandlerProps, any> {
  handleChange = (e: React.ChangeEvent<any>) => {
    console.log(e)
    alert('handleChange')
  }

  handleClick = (e: React.ChangeEvent<any>) => {
    console.log(e)
    alert('handle click')
  }

  render () {
    return this.props.children(this.handleClick, this.handleChange)
  }
}

/* tslint:disable */
function Forms () {
  return (
    <div>
      <Form onSubmit={() => alert('submit')}>
        <Handler>
          {(handleClick, handleChange) => (
            <div>
              <input onChange={handleChange} />
              <button onClick={handleClick}>button</button>
            </div>
          )}
        </Handler>

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
      </Form>
    </div>
  )
}

export default Forms
