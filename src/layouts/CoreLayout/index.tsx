import { FC } from 'react';
import { withRouter } from 'react-router-dom';

import { Navigation } from '@fragments/Navigation';

import { Layout, Section } from './styles';

export const CoreLayout: FC = ({ children }) => (
  <Layout>
    <Navigation />
    <Section>{children}</Section>
  </Layout>
);

export default withRouter(CoreLayout);
