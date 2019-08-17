import * as React from 'react';

import { OuterProps } from './types';
import { Group } from './styled';

const ButtonGroup: React.FC<OuterProps> = (props: OuterProps) => {
  // const itemReferer = React.createRef<HTMLInputElement>();
  // const [count, setCount] = useState(value);

  return (
    <Group {...props} />
  );
};

export default ButtonGroup;
