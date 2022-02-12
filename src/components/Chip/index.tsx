import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type ChipSizeType = 's' | 'm' | 'l' | 'x';

type Props = {
  size?: ChipSizeType;
  label?: string;
};

export const CHIP_SIZES: Record<ChipSizeType, number> = {
  s: 16,
  m: 24,
  l: 32,
  x: 40,
};

export const CHIP_SIZE: Record<ChipSizeType, ChipSizeType> = {
  s: 's',
  m: 'm',
  l: 'l',
  x: 'x',
};

export const Chip = ({ size, label, children }: PropsWithChildren<Props>) => {
  return (
    <div className={classNames(styles.chip, size && styles[size])}>
      <div className={styles.chip__name}>{label || children}</div>
    </div>
  );
};

Chip.displayName = 'Chip';
