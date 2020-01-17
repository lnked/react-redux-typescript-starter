import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Tree from './';

test('it works', () => {
  const rendered: any = renderer.create(<Tree />).toJSON();
  expect(rendered).toBeTruthy();
});
