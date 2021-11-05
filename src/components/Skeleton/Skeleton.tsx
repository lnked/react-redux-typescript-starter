import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { SkeletonProps, SkeletonThemeType, SkeletonThemeProps } from './types';

const DARK_THEME = 'dark';

const LIGHT_THEME = 'light';

const THEME_COLORS: Record<SkeletonThemeType, SkeletonThemeProps> = {
  dark: {
    color: '#202020',
    highlightColor: '#444',
  },
  light: {
    color: '#eee',
    highlightColor: '#f5f5f5',
  },
};

export const SKELETON_THEME: Record<SkeletonThemeType, SkeletonThemeType> = {
  [DARK_THEME]: DARK_THEME,
  [LIGHT_THEME]: LIGHT_THEME,
};

export const SkeletonItem = ({ theme = LIGHT_THEME, isFluid = false, ...props }: SkeletonProps) => (
  <SkeletonTheme {...THEME_COLORS?.[theme]}>
    <Skeleton {...props} {...(isFluid ? { width: '100%' } : {})} />
  </SkeletonTheme>
);
