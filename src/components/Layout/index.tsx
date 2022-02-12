import { PropsWithChildren } from 'react';

import { Container } from './styles';

export interface OuterProps {}

export const Layout = ({ children, ...props }: PropsWithChildren<OuterProps>) => {
  return <Container {...props}>{children}</Container>;
};
