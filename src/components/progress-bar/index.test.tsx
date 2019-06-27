import * as React from 'react';
import renderer from 'react-test-renderer';

import ProgressBar from './';

test('it works', done => {
  // console.log(done);
  const tree: any = renderer.create(<ProgressBar />).toJSON();
  expect(tree.props.value).toEqual(1);
});
