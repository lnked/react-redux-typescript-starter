import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Icon } from './';

test('it works', () => {
  const rendered: any = renderer.create(<Icon />).toJSON();
  expect(rendered).toBeTruthy();
});
