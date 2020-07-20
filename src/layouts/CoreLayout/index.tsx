import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Navigation } from 'fragments';

import { Layout, Section } from './styles';

export interface OuterProps extends RouteComponentProps {
  location: any;
  children?: React.ReactChild[] | React.ReactChild;
}

class CoreLayout extends React.Component<OuterProps, {}> {

  static defaultProps = {
    children: '',
  };

  componentDidUpdate(prevProps: OuterProps) {
    const { location } = prevProps;
    const { pathname, hash } = this.props.location;

    const pathChanged = pathname !== location.pathname;
    const hashChanged = hash !== location.hash;

    if (pathChanged || hashChanged) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <Layout>
        <Navigation />
        <Section>{children}</Section>
      </Layout>
    );
  }

}

export default withRouter(CoreLayout);
