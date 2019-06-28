import * as React from 'react';
import renderer from 'react-test-renderer';

import Spinner from './';

test('it works', () => {
  const rendered: any = renderer.create(<Spinner />).toJSON();
  expect(rendered).toBeTruthy();
});
