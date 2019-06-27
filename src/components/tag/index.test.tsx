import * as React from 'react';
import renderer from 'react-test-renderer';

import Tag from './';

test('it works', done => {
  // console.log(done);
  const tree: any = renderer.create(<Tag />).toJSON();
  expect(tree.props.value).toEqual(1);
});
