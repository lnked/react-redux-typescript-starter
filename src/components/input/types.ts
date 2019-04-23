export type valueType = string | number
export type onChangeType = (e: React.ChangeEvent<HTMLInputElement>, value?: valueType) => void;

export interface InnerState {
  defaultValue?: valueType;
  handleChange?: onChangeType;
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
  onChange?: onChangeType;
}
