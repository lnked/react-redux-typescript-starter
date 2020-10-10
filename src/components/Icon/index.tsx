import * as React from 'react';

import { Container } from './styles';
import { OuterProps } from './types';

export const Icon: React.FC<OuterProps> = (props: OuterProps) => {
  return (
    <Container {...props} />
  );
};

Icon.displayName = 'Icon';
