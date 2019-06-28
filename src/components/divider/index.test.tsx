import * as React from 'react';
import renderer from 'react-test-renderer';

import Divider from './';

test('it works', () => {
  const rendered: any = renderer.create(<Divider />).toJSON();
  expect(rendered).toBeTruthy();
});
