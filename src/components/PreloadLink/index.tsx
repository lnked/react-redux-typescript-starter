import * as React from 'react';

import { Link } from './styles';

export interface OuterProps {
  to: string;
  label?: string;
  children?: React.ReactChild[] | string;
  component?: any;
}

let timeout: any = null;

export const PreloadLink: React.FC<OuterProps> = (props: OuterProps) => {
  const { label, children, component, ...restProps } = props;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => component?.preload(), 250);
  };

  return (
    <Link onMouseEnter={handleMouseEnter} {...restProps}>
      {children || label}
    </Link>
  );
};

PreloadLink.displayName = 'PreloadLink';
