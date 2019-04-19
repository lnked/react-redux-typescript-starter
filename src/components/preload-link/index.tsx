import * as React from 'react'

import { Link } from './styles'

export interface OuterProps {
  label?: string;
  children?: React.ReactChild[] | string;
  component?: any;
}

class PreloadLink extends React.Component<OuterProps, void> {
  timeout: any = null

  handleMouseEnter = () => {
    const { component } = this.props

    clearTimeout(this.timeout)

    this.timeout = setTimeout(() =>
      component && component.preload && component.preload()
    ,                         250)
  }

  render () {
    const { label, children, component, ...props } = this.props

    return (
      <Link {...props} onMouseEnter={this.handleMouseEnter}>
        {children || label}
      </Link>
    )
  }
}

export default PreloadLink
