export interface OuterProps {
  img?: any;
  enum?: 'button' | 'text';
  value?: string;
  width?: number;
  simple?: boolean;
  handleChange?: (e: Event) => void | boolean;
  children?: JSX.Element[] | JSX.Element | any;
}
