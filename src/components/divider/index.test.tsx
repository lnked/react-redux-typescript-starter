import * as React from 'react';
import renderer from 'react-test-renderer';

import Divider from './';

test('it works', done => {
  // console.log(done);
  const tree: any = renderer.create(<Divider />).toJSON();
  expect(tree.props.value).toEqual(1);
});
