import * as React from 'react';

import { Consumer } from './context';

export const withContext = <P extends object>(Component: React.ComponentType<P>) => function ContextComponent(props: P) {
  return (
    <Consumer>
      {context => <Component {...props} {...context} />}
    </Consumer>
  );
};
