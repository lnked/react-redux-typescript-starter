import { FC } from 'react';

import { OuterProps } from './types';
import { Group } from './styles';

export const ButtonGroup: FC<OuterProps> = props => <Group {...props} />;

ButtonGroup.displayName = 'ButtonGroup';
