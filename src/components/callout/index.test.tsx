import * as React from 'react';
import renderer from 'react-test-renderer';

import Callout from './';

test('it works', done => {
  // console.log(done);
  const tree: any = renderer.create(<Callout />).toJSON();
  expect(tree.props.value).toBe(1);
});
