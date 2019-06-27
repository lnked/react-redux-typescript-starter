import * as React from 'react';
import renderer from 'react-test-renderer';

import Card from './';

test('it works', done => {
  // console.log(done);
  const tree: any = renderer.create(<Card />).toJSON();
  expect(tree.props.value).toEqual(1);
});
