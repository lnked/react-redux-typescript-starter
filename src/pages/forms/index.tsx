import * as React from 'react'

import { Form, JsonPretty } from 'components'

import {
  Input,
  Select,
  Textarea,
} from './styles'

export interface P {
  initialCount?: number;
}

function Forms () {
  return (
    <Form
      onSubmit={(values, { setSubmitting }) => {
        alert('submit')
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      initialValues={{ text: 'test' }}
      validationSchema={{
        email: ['notEmpty', 'isEmail'],
      }}
    >
      {({ values, isValid, dirty, handleSubmit, handleChange, isSubmitting }) => (
        <React.Fragment>
          <JsonPretty json={values} />

          <Input name='text' value={values.text} onChange={handleChange} />

          <Input name='name' value={values.name} placeholder='Name' onChange={handleChange} />

          <Input name='value' value={values.value} placeholder='Value' onChange={handleChange} />

          <Input name='number' type='number' value={values.number} type='number' onChange={handleChange} />

          <Input name='checkbox' type='checkbox' onChange={handleChange} />

          <Input name='radio' type='radio' value={1} onChange={handleChange} />
          <Input name='radio' type='radio' value={2} onChange={handleChange} />
          <Input name='radio' type='radio' value={3} onChange={handleChange} />

          <Textarea name='textarea' placeholder='Textarea' onChange={handleChange} />

          <Select name='select' onChange={handleChange} >
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
            <option value={5}>Option 5</option>
            <option value={6}>Option 6</option>
          </Select>

          <Select name='multiSelect' onChange={handleChange} multiple>
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
            <option value={5}>Option 5</option>
            <option value={6}>Option 6</option>
          </Select>

          <button type='submit' onClick={handleSubmit} disabled={isSubmitting || !isValid || !dirty}>
            Submit
          </button>
        </React.Fragment>
      )}
    </Form>
  )
}

export default Forms
