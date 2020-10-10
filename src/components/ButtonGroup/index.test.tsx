import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { ButtonGroup } from './';

test('it works', () => {
  const rendered: any = renderer.create(<ButtonGroup />).toJSON();
  expect(rendered).toBeTruthy();
});
