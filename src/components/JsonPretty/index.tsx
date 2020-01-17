import * as React from 'react';

import { Code, Wrapper } from './styled';

export interface OuterProps {
  json: any;
  theme?: string;
}

const JsonPretty: React.FC<OuterProps> = ({ json }: OuterProps) => (
  <Wrapper>
    <Code>
      {JSON.stringify(json, null, '  ')}
    </Code>
  </Wrapper>
);

export default JsonPretty;
