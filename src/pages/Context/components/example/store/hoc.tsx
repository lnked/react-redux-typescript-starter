import * as React from 'react';

import { Consumer } from './context';

const withContext = <P extends object>(Component: React.ComponentType<P>) => {

  return function ContextComponent(props: P) {
    return (
      <Consumer>
        {(context) => <Component {...props} {...context} />}
      </Consumer>
    );
  };

};

export default withContext;
