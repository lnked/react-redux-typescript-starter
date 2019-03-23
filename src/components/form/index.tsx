import * as React from 'react'

import { isObject, isEmptyChildren } from 'utils/assertions'

export interface PassedMethods {
  handleBlur?: (e?: React.FormEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset?: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
  setSubmitting?: (isSubmitting: boolean) => void;
}

export interface PassedState {
  errors: any;
  values: any;
  touched: any;
  dirty: boolean;
  isValid: boolean;
  submitCount: number;
  isSubmitting: boolean;
  isValidating: boolean;
}

export interface Props {
  children: (props: PassedState & PassedMethods) => any;
  onSubmit?: (values: any, props: any) => void;
  initialValues?: any;
  validationSchema?: any;
}

export interface State extends PassedState {
  initialized: boolean;
}

class Form extends React.Component<Props, State> {
  static defaultProps = {
    initialValues: {},
    validateOnBlur: true,
    validateOnChange: true,
  }

  static getDerivedStateFromProps (nextProps: Props, prevState: State) {
    const { initialized } = prevState
    const { initialValues } = nextProps

    if (initialized || !Object.keys(initialValues).length) {
      return null
    }

    return {
      ...prevState,
      values: initialValues,
      initialized: true,
    }
  }

  state = {
    initialized: false,
    errors: {},
    values: {},
    touched: {},
    dirty: false,
    isValid: false,
    submitCount: 0,
    isSubmitting: false,
    isValidating: false,
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState(state => ({ values: { ...state.values, [name]: value } }))
  }

  handleBlur = (e?: React.FormEvent<HTMLInputElement>) => {
    console.log(e, 'handleBlur 1')
  }

  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e)
    console.log('handleFocus 1')
  }

  setSubmitting = (isSubmitting: boolean) => {
    this.setState({ isSubmitting })
  }

  handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    const { values } = this.state
    const { onSubmit } = this.props

    this.setState({ isSubmitting: true }, () => {
      if (onSubmit) {
        onSubmit(values, { e, setSubmitting: this.setSubmitting })
      }
    })
  }

  handleReset = (e?: React.FormEvent<HTMLFormElement>) => {
    console.log('reset', e)
  }

  render () {
    const { children } = this.props
    const {
      dirty,
      errors,
      values,
      touched,
      isValid,
      submitCount,
      isSubmitting,
      isValidating,
    } = this.state

    if (isObject(children) && !isEmptyChildren(children)) {
      return React.Children.map(children, (node: React.ReactNode | any) =>
        React.cloneElement(node, {
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onInput: this.handleChange,
          onChange: this.handleChange,
        })
      )
    }

    return children({
      dirty,
      errors,
      values,
      touched,
      isValid,
      submitCount,
      isSubmitting,
      isValidating,
      handleBlur: this.handleBlur,
      handleFocus: this.handleFocus,
      handleReset: this.handleReset,
      handleInput: this.handleChange,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    })
  }
}

export default Form
