import * as React from 'react';
import renderer from 'react-test-renderer';

import Tree from './';

test('it works', done => {
  console.log(done);
  const tree: any = renderer.create(<Tree />).toJSON();
  expect(tree.props.value).toBe(1);
});
