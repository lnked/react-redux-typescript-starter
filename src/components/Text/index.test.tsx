import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Text from './';

test('it works', () => {
  const rendered: any = renderer.create(<Text />).toJSON();
  expect(rendered).toBeTruthy();
});