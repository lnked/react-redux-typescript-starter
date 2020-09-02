import * as React from 'react';

import { Example } from './components/Example';

export interface OuterProps {
  initialCount?: number;
}

export function Context() {
  return (<Example />);
}
