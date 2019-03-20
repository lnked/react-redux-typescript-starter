import * as React from 'react'

export interface P {
  onSubmit?: () => void;
  className?: string;
}

export interface S {
  values: any;
}

export class Form extends React.Component<P, S> {
  static defaultProps = {}

  state = {
    values: {},
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
