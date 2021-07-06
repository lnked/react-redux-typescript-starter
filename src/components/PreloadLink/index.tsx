import { FC, ReactChild, memo } from 'react';

import { Link } from './styles';

export interface OuterProps {
  to: string;
  label?: string;
  children?: ReactChild[] | string;
  component?: any;
}

export const PreloadLink: FC<OuterProps> = memo((props: OuterProps) => {
  const { label, children, ...restProps } = props;

  return <Link {...restProps}>{children || label}</Link>;
});

PreloadLink.displayName = 'PreloadLink';
