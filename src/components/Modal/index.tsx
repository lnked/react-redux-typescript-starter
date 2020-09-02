import * as React from 'react';
import { createPortal } from 'react-dom';

export interface OuterProps {
  children: React.ReactChild[];
}

export class Modal extends React.Component<OuterProps, {}> {

  static displayName = 'Modal';

  element: HTMLElement | null = null;

  componentDidMount() {
    this.element = document.createElement('div');
    this.element && document.body.appendChild(this.element);
  }

  componentWillUnmount() {
    this.element && document.body.removeChild(this.element);
  }

  render() {
    const { children } = this.props;

    if (!this.element) {
      return null;
    }

    return createPortal(children, this.element);
  }

}
