export type SkeletonThemeType = 'dark' | 'light';

export type SkeletonThemeProps = {
  color?: string;
  highlightColor?: string;
};

export type SkeletonProps = {
  theme?: SkeletonThemeType;
  delay?: number;
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  isFluid?: boolean;
  duration?: number;
};
