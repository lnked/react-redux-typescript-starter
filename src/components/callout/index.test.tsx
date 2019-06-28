import * as React from 'react';
import renderer from 'react-test-renderer';

import Callout from './';

test('it works', () => {
  const rendered: any = renderer.create(<Callout />).toJSON();
  expect(rendered).toBeTruthy();
});
