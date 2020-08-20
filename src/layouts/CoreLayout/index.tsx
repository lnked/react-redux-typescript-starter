import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Navigation } from 'fragments';

import { Layout, Section } from './styles';


type OuterProps = {
  children?: React.ReactChild[] | React.ReactChild;
  location: {
    hash: string;
    pathname: string;
  };
}

export const CoreLayout: React.FC<OuterProps & RouteComponentProps> = ({
  children = '',
  location: {
    hash,
    pathname,
  },
}) => {
  React.useEffect(() => {
    const hasPathChanged = pathname !== location.pathname;
    const hasHashChanged = hash !== location.hash;

    console.log('location: ', { pathname, hash, hasPathChanged, hasHashChanged });

    if (hasPathChanged || hasHashChanged) {
      window.scrollTo(0, 0);
    }
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
