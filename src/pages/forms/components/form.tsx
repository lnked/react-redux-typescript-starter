import * as React from 'react'

export interface P {
  onSubmit?: () => void;
  className?: string;
}

export interface S {
  visible: boolean;
}

export class Form extends React.Component<P, S> {
  static defaultProps = {}

  state = {
    values: [
      { name: '', },
    ],
  }

  handleFocus = (e: Event | any) => {
    console.log('handleFocus: ', e.target.name, e.target.value)
  }

  handleBlur = (e: Event | any) => {
    console.log('handleBlur: ', e.target.name, e.target.value)
  }

  handleChange = (e: Event | any) => {
    console.log('handleChange', e.target.name, e.target.value)
  }

  render () {
    const { children } = this.props

    return React.Children.map(children, (node: React.ReactNode | any) =>
      React.cloneElement(node, {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
      })
    )
  }
}

export default Form
