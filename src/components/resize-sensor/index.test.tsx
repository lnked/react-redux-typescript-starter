import * as React from 'react';
import renderer from 'react-test-renderer';

import ResizeSensor from './';

test('it works', done => {
  console.log(done);
  const tree: any = renderer.create(<ResizeSensor />).toJSON();
  expect(tree.props.value).toBe(1);
});
