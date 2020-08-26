import * as React from 'react';

import { Image, JsonPretty } from 'components';

import { SnakeCase, AnotherBuild } from './components';

import { Layout } from './styles';

const x: { s?: string } = {};
export const a = x?.s;
export const b = x ?? 'xx';

const About = ({ ui, app }: any) => (
  <Layout>
    <JsonPretty json={ui} />
    <JsonPretty json={app} />
    <h2>About</h2>
    <SnakeCase />
    <AnotherBuild />
    <Image width={100} height={100} src="https://via.placeholder.com/300/09f/fff.png" alt="xxx" />
    <Image src="https://via.placeholder.com/300/09f/fff.png" alt="xxx" circle />
  </Layout>
);

export default About;
