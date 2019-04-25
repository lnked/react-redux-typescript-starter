export type valueType = string | number | undefined;
export type eventType = React.ChangeEvent<HTMLInputElement>;

export interface InnerState {
  propsValue?: valueType;
  defaultValue?: valueType;
  handleChange?: (e: eventType) => void;
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
  defaultValue?: valueType;
  inputClassName?: string;
  onChange?: (e: eventType) => void;
}
