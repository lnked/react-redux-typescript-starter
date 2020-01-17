import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Spinner from './';

test('it works', () => {
  const rendered: any = renderer.create(<Spinner />).toJSON();
  expect(rendered).toBeTruthy();
});
