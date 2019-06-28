import * as React from 'react';
import renderer from 'react-test-renderer';

import Tabs from './';

test('it works', () => {
  const rendered: any = renderer.create(<Tabs />).toJSON();
  expect(rendered).toBeTruthy();
});
