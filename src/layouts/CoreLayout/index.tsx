import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Navigation } from 'fragments';

import { Layout, Section } from './styles';

type OuterProps = {
  children?: React.ReactChild[] | React.ReactChild;
};

export const CoreLayout: React.FC<OuterProps & RouteComponentProps> = ({
  children = '',
  location: {
    hash,
    pathname,
  },
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <Layout>
      <Navigation />
      <Section>{children}</Section>
    </Layout>
  );
};

CoreLayout.displayName = 'CoreLayout';

export default withRouter(CoreLayout);
