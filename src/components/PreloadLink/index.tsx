import { PropsWithChildren, memo } from 'react';

import { Link } from './styles';

export interface OuterProps {
  to: string;
  label?: string;
  component?: any;
}

export const PreloadLink = memo((props: PropsWithChildren<OuterProps>) => {
  const { label, children, ...restProps } = props;

  return <Link {...restProps}>{children || label}</Link>;
});

PreloadLink.displayName = 'PreloadLink';
