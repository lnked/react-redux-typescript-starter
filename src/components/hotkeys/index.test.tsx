import * as React from 'react';
import renderer from 'react-test-renderer';

import Hotkeys from './';

test('it works', done => {
  // console.log(done);
  const tree: any = renderer.create(<Hotkeys />).toJSON();
  expect(tree.props.value).toBe(1);
});
