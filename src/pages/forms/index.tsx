import * as React from 'react'

import { Form, Input, Textarea, Select } from './styles'

export interface P {
  initialCount?: number;
}

export interface HandlerProps {
  handleClick: () => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  children: (handleClick: any, handleChange: any) => Element;
}

export interface HandlerState {
  initialCount?: number;
}

class Handler extends React.Component<HandlerProps, HandlerState> {
  static defaultProps = {
    initialValues: {},
    validateOnBlur: true,
    validateOnChange: true,
  }

  // static getDerivedStateFromProps (nextProps: HandlerProps, prevState: HandlerState) {
  //   if (prevState.values === nextProps.values) {
  //     return null
  //   }

  //   return {
  //     ...prevState,
  //     ...nextProps,
  //   }
  // }

  state = {
    errors: {},
    values: {},
    touched: {},
    dirty: false,
    isValid: false,
    submitCount: 0,
    isSubmitting: false,
    isValidating: false,
  }

  componentDidMount() {
    this.setState({ values: this.props.initialValues })
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    alert('handleChange 1')
  }

  handleBlur = (e: React.BlurEvent<HTMLInputElement>) => {
    console.log(e)
    alert('handleBlur 1')
  }

  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e)
    alert('handleFocus 1')
  }

  setSubmitting = (isSubmitting) => {
    this.setState({ isSubmitting: true })
  }

  handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    console.log(e)
    this.setState({ isSubmitting: true })

    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.values, { setSubmitting: this.state.setSubmitting })
    }
  }

  handleReset = () => {
    alert('reset')
  }

  render () {
    const { children } = this.props;
    const {
      errors,
      values,
      touched,
      isSubmitting,
    } = this.state;

    return children({
      errors,
      values,
      touched,
      isSubmitting,
      handleBlur: this.handleBlur,
      handleFocus: this.handleFocus,
      handleReset: this.handleReset,
      handleInput: this.handleChange,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    })
  }
}

/* tslint:disable */
function Forms () {
  return (
    <div>
      <Form onSubmit={() => alert('submit')}>
        <Handler
          initialValues={{ text: 'test' }}
          onSubmit={(values, { setSubmitting }) => {
            alert('submit')
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
          // validationSchema={Yup.object().shape({
          //   email: Yup.string()
          //   .email()
          //   .required('Required'),
          // })}
        >
          {({ values, handleSubmit, handleChange, isSubmitting }) => (
            <div>
              <input name='text' value={values.text} onChange={handleChange} />
              <button type='submit' disabled={isSubmitting} onClick={handleSubmit}>Submit</button>
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
