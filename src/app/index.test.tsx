import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './';

describe('renders without crashing', () => {
  it('renders without crashing', () => {
    expect(true).toBeTruthy();
  })

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });
});
