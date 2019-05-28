import * as React from 'react';
import renderer from 'react-test-renderer';

import Tabs from './';

test('it works', done => {
  // console.log(done);
  const tree: any = renderer.create(<Tabs />).toJSON();
  expect(tree.props.value).toBe(1);
});
