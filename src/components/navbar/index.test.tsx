import * as React from 'react';
import renderer from 'react-test-renderer';

import Navbar from './';

test('it works', done => {
  // console.log(done);
  const tree: any = renderer.create(<Navbar />).toJSON();
  expect(tree.props.value).toBe(1);
});
