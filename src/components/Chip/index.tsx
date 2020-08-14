import * as React from 'react';

export enum ChipSizeType {
  s,
  m,
  l,
  x,
}

type Props = {
  size?: ChipSizeType;
}

export const CHIP_SIZE = {
  s: 16,
  m: 24,
  l: 32,
  x: 40,
};

export const Chip: React.FC<Props> = ({ size }) => {
  return (
    <div>
      Chip {size}
    </div>
  );
};

Chip.displayName = 'Chip';
