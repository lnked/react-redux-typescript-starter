import { ReactNode, ReactChild, FC } from 'react';

import { Container } from './styles';

export interface OuterProps {
  children: ReactNode | ReactChild;
}

export const Layout: FC<OuterProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
