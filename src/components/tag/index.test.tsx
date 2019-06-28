import * as React from 'react';
import renderer from 'react-test-renderer';

import Tag from './';

test('it works', () => {
  const rendered: any = renderer.create(<Tag />).toJSON();
  expect(rendered).toBeTruthy();
});
