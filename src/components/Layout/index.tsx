import * as React from 'react';

import { Container } from './styles';

export interface OuterProps {
  children: React.ReactNode | React.ReactChild;
}

export const Layout: React.FC<OuterProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};
