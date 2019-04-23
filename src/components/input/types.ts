export type valueType = string | number;
export type eventType = React.ChangeEvent<HTMLInputElement>;

export interface InnerState {
  defaultValue?: valueType;
  handleChange?: (value: valueType, e: eventType) => void;
}

export interface OuterProps {
  name?: string;
  type?: string;
  label?: string;
  error?: string;
  focus?: boolean;
  value?: valueType;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  onChange?: (e: eventType) => void;
}
