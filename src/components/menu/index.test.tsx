import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Menu from './';

test('it works', () => {
  const rendered: any = renderer.create(<Menu />).toJSON();
  expect(rendered).toBeTruthy();
});
