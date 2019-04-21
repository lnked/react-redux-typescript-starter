import * as React from 'react';

const NoMatch = ({ match }: any) => (
  <div>
      Error Page {JSON.stringify(match)}
  </div>
);

export default NoMatch;
