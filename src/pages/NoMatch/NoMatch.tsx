import * as React from 'react';

export const NoMatch = ({ match }: any) => (
  <div>
      Error Page {JSON.stringify(match)}
  </div>
);

export default NoMatch;
