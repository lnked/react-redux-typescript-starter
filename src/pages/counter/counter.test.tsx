import * as React from 'react'
import renderer from 'react-test-renderer'
// import { act } from 'react-dom/test-utils'
// https://github.com/threepointone/react-act-examples/blob/master/act-examples.test.js

import Counter from './'

describe('<Counter />', () => {
  it('t-1', () => {
    const rendered: any = renderer.create(<Counter initialCount={3} />).toJSON()
    expect(rendered.type).toEqual('div')
  })
})

// it('should increment a counter', () => {
//   const el = document.createElement('div');
//   document.body.appendChild(el);
//   // we attach the element to document.body to ensure events work
//   ReactDOM.render(<App />, el);
//   const button = el.childNodes[0];
//   for (let i = 0; i < 3; i++) {
//     button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
//   }
//   expect(button.innerHTML).toEqual('3');
// });

// it('should render 1', () => {
//   const el = document.createElement('div');
//   act(() => {
//     ReactDOM.render(<App />, el);
//   });
//   expect(el.innerHTML).toEqual('1'); // this passes!
// });

// act(() => {
//   for (let i = 0; i < 3; i++) {
//     button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
//   }
// });
// expect(button.innerHTML).toEqual(3); // this fails, it's actually '1'!
