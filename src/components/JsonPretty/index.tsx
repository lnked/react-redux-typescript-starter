import { FC } from 'react';

import { Code, Wrapper } from './styles';

export interface OuterProps {
  json: any;
  theme?: string;
}

export const JsonPretty: FC<OuterProps> = ({ json }: OuterProps) => (
  <Wrapper>
    <Code>{JSON.stringify(json, null, '  ')}</Code>
  </Wrapper>
);
