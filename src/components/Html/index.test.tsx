import * as React from 'react';
import * as renderer from 'react-test-renderer';

import HTML from './';

test('it works', () => {
  const rendered: any = renderer.create(<HTML />).toJSON();
  expect(rendered).toBeTruthy();
});