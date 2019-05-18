import * as React from 'react';
import renderer from 'react-test-renderer';

import Icon from './';

test('it works', done => {
  console.log(done);
  const tree: any = renderer.create(<Icon />).toJSON();
  expect(tree.props.value).toBe(1);
});
