import React, { Component } from 'react';

import * as styles from './styles.module.scss';

export interface OuterTypes {
  children: React.ReactChildren;
  forwardRef: React.ReactElement;
  className?: string;
  onStartScroll?: () => {};
  onEndScroll?: () => {};
}

export interface InnerState {
  dragging: boolean;
}

class ScrollWrapper extends Component<OuterTypes, InnerState> {
  static defaultProps = {
    list: [],
    selected: [],
    loading: true,
  };

  state = {
    dragging: false,
  };

  moving = false;

  lastClientY = 0;

  componentDidMount() {
    window.addEventListener('mouseup', this.mouseUpHandle);
    window.addEventListener('mousemove', this.mouseMoveHandle);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.mouseUpHandle);
    window.removeEventListener('mousemove', this.mouseMoveHandle);
  }

  mouseUpHandle = () => {
    const { dragging } = this.state;
    const { onEndScroll } = this.props;

    if (dragging) {
      setTimeout(() => {
        this.moving = false;
      }, 50);

      this.setState({ dragging: false }, () => {
        onEndScroll && onEndScroll();
      });
    }
  }

  mouseDownHandle = (e: any) => {
    e.preventDefault();
    const { dragging } = this.state;
    const { onStartScroll } = this.props;

    if (!dragging) {
      this.setState({ dragging: true }, () => {
        onStartScroll && onStartScroll();
      });

      this.lastClientY = e.clientY;
    }
  }

  mouseMoveHandle = (e: any) => {
    const { dragging } = this.state;
    const { forwardRef } = this.props;

    if (dragging) {
      this.moving = true;

      const scrollTop = -this.lastClientY + e.clientY;
      forwardRef.current.scrollTop -= scrollTop;
      this.lastClientY = e.clientY;
    }
  }

  handleClick = (onClick: any) => (e: any) => {
    e.preventDefault();
    const { dragging } = this.state;

    if (!dragging && !this.moving) {
      onClick && onClick();
    }
  }

  render() {
    const { children, className, forwardRef } = this.props;

    if (!children) {
      return null;
    }

    const items = React.Children.map(children, (element, index) => {
      if (!element) {
        return null;
      }

      return React.cloneElement(element, {
        key: element.key || index,
        onClick: this.handleClick(element.props.onClick),
        onMouseUp: this.mouseUpHandle,
        onMouseDown: this.mouseDownHandle,
        style: { borderWidth: 1, borderColor: 'red' },
      });
    });

    return (
      <div
        ref={forwardRef}
        className={classNames(styles.overflow, className)}
        onMouseUp={this.mouseUpHandle}
        onMouseDown={this.mouseDownHandle}
        onMouseMove={this.mouseMoveHandle}
      >
        {items}
      </div>
    );
  }
}

export default ScrollWrapper;
