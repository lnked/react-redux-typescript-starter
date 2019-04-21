import * as React from 'react';

import Example from './components/example';

export interface OuterProps {
  initialCount?: number;
}

function Context() {

  return (<Example />);

}

export default Context;
