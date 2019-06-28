import * as React from 'react';
import renderer from 'react-test-renderer';

import Hotkeys from './';

test('it works', () => {
  const rendered: any = renderer.create(<Hotkeys />).toJSON();
  expect(rendered).toBeTruthy();
});
