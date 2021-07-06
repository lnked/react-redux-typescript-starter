import { HTMLProps, ChangeEvent } from 'react';
export type valueType = string | number | undefined;
export type eventType = ChangeEvent<HTMLInputElement>;

export interface InnerState {
  propsValue?: valueType;
  defaultValue?: valueType;
  handleChange?: (e: eventType, value: valueType) => void;
}

export interface OuterProps extends HTMLProps<HTMLInputElement> {
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
  onChange?: (e: eventType, value?: valueType) => void;
}
