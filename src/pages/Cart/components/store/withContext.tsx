import * as React from 'react';

import { Consumer } from './context';

export const withContext = <P extends object>(Component: React.ComponentType<P>) => {
  return function ContextComponent(props) {
    return (
      <Consumer>
        {context => <Component {...props} {...context} />}
      </Consumer>
    );
  };

};
