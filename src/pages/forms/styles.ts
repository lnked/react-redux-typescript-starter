import { Form as FormComponent } from './components/form'
import styled from '@emotion/styled'

export const Form = styled(FormComponent)`
  border: 1px solid lime;
`

export const Input = styled.input`
  width: 100%;
  outline: 0;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
`

export const Textarea = styled.textarea`
  width: 100%;
  outline: 0;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
`

export const Select = styled.select`
  width: 100%;
  outline: 0;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
`
