export interface OuterProps {
  img?: any;
  value?: string;
  enum?: 'button' | 'text';
  width?: number;
  simple?: boolean;
  handleChange?: (e: Event) => void | boolean;
  children?: JSX.Element[] | JSX.Element | any;
}
