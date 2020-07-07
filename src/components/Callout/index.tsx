import * as React from 'react';

import { OuterProps } from './types';
import { StyledDiv } from './styles';

const Callout: React.FC<OuterProps> = (props: OuterProps) => {
  // const itemReferer = React.createRef<HTMLInputElement>();
  // const [count, setCount] = useState(value);

  return (
    <StyledDiv {...props} />
  );
};

Callout.displayName = 'Callout';

export default Callout;
