import * as renderer from 'react-test-renderer';

import { Icon } from './';

test('it works', () => {
  const rendered = renderer.create(<Icon />).toJSON();
  expect(rendered).toHaveStyleRule('color', '#ddd');
  expect(rendered).toBeTruthy();
});
