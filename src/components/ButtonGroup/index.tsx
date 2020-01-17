import * as React from 'react';

import { OuterProps } from './types';
import { Group } from './styled';

const ButtonGroup: React.FC<OuterProps> = props => <Group {...props} />;

export default ButtonGroup;