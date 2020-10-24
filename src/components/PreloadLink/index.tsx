import * as React from 'react';

import { Link } from './styles';

export interface OuterProps {
  to: string;
  label?: string;
  children?: React.ReactChild[] | string;
  component?: any;
}

export const PreloadLink: React.FC<OuterProps> = React.memo((props: OuterProps) => {
  const { label, children, ...restProps } = props;

  return (
    <Link {...restProps}>
      {children || label}
    </Link>
  );
});

PreloadLink.displayName = 'PreloadLink';
