import * as React from 'react';

import { Container } from './styles';

export interface OuterProps {
  children: React.ReactNode | React.ReactChild;
}

const Layout: React.FC<OuterProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default Layout;
