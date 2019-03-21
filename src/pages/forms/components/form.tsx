import * as React from 'react'

export interface P {
  onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleReset: () => void;
  handleBlur (e: React.FocusEvent<any>): void;
  handleBlur<T = string | any> (fieldOrEvent: T): T extends string ? ((e: any) => void) : void;
  handleChange (e: React.ChangeEvent<any>): void;
  handleChange<T = string | React.ChangeEvent<any>> (
    field: T
  ): T extends React.ChangeEvent<any>
    ? void
    : ((e: string | React.ChangeEvent<any>) => void);
  className?: string;
  initialValues: any;
}

export interface S {
  values: any;
  errors: any[];
  touched: any[];
  status?: any;
  isValidating: boolean;
  isSubmitting: boolean;
  submitCount: number;
}

export class Form extends React.Component<P, S> {
  static defaultProps = {}

  state = {
    values: {},
    errors: [],
    touched: [],
    status: false,
    isValidating: false,
    isSubmitting: false,
    submitCount: 0,
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e && e.preventDefault) {
      e.preventDefault()
    }

    console.log('handleSubmit: ', e)
  }

  handleFocus = (e: Event | any) => {
    console.log('handleFocus: ', e.target.name, e.target.value)
  }

  handleBlur = (e: Event | any) => {
    console.log('handleBlur: ', e.target.name, e.target.value)
  }

  handleChange = (e: Event | any) => {
    const { name, value } = e.target

    this.setState(state => ({
      values: {
        ...state.values, [name]: value,
      },
    }))
  }

  render () {
    const { children } = this.props

    console.error('render: ', this.state.values)

    return React.Children.map(children, (node: React.ReactNode | any) =>
      React.cloneElement(node, {
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onInput: this.handleChange,
        onChange: this.handleChange,
      })
    )
  }
}

export default Form
