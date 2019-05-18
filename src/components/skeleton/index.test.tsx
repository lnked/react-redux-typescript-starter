import * as React from 'react';
import renderer from 'react-test-renderer';

import Skeleton from './';

test('it works', done => {
  console.log(done);
  const tree: any = renderer.create(<Skeleton />).toJSON();
  expect(tree.props.value).toBe(1);
});
