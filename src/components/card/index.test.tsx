import * as React from 'react';
import renderer from 'react-test-renderer';

import Card from './';

test('it works', () => {
  const rendered: any = renderer.create(<Card />).toJSON();
  expect(rendered).toBeTruthy();
});
