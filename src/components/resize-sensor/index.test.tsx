import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ResizeSensor from './';

test('it works', () => {
  const rendered: any = renderer.create(<ResizeSensor />).toJSON();
  expect(rendered).toBeTruthy();
});
