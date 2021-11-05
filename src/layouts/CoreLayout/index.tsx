import { PropsWithChildren } from 'react';

import { Navigation } from '@fragments/Navigation';

import { Layout, Section } from './styles';

export const CoreLayout = ({ children }: PropsWithChildren<{}>) => (
  <Layout>
    <Navigation />
    <Section>{children}</Section>
  </Layout>
);

export default CoreLayout;
