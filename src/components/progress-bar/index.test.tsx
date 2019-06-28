import * as React from 'react';
import renderer from 'react-test-renderer';

import ProgressBar from './';

test('it works', () => {
  const rendered: any = renderer.create(<ProgressBar />).toJSON();
  expect(rendered).toBeTruthy();
});
