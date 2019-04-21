import * as React from 'react';
import isEqual from 'react-fast-compare';

import { isObject, isEmptyChildren } from 'utils/assertions';

export interface OuterPropsassedMethods {
  handleBlur?: (e?: React.FormEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  setSubmitting?: (isSubmitting: boolean) => void;
}

export interface OuterPropsassedState {
  errors: any;
  values: any;
  touched: any;
  isDirty: boolean;
  isValid: boolean;
  submitCount: number;
  isSubmitted: boolean;
  isValidated: boolean;
}

export interface OuterProps {
  children: (props: PassedState & PassedMethods) => any;
  onReset?: (values: any, props: any) => void;
  onSubmit?: (values: any, props: any) => void;
  className?: string;
  initialValues?: any;
  validationSchema?: any;
}

export interface OuterState extends PassedState {
  initialized: boolean;
  isSubmitting: boolean;
  isValidating: boolean;
}

export class SyntheticForm extends React.Component<OuterProps, OuterState> {
  static defaultProps = {
    className: '',
    initialValues: {},
    validateOnBlur: true,
    validateOnChange: true,
  };

  static getDerivedStateFromProps (nextProps: OuterProps, prevState: OuterState) {
    const { initialized } = prevState;
    const { initialValues } = nextProps;

    console.error(isEqual(prevState.values, prevState.values));

    if (initialized || !Object.keys(initialValues).length) {
      return null;
    }

    // const isDirty = useMemo(() => !isEqual(lastValues, values), [
    //   lastValues,
    //   values,
    // ])

    return {
      ...prevState,
      values: initialValues,
      initialized: true,
    };
  }

  state = {
    initialized: false,
    errors: {},
    values: {},
    touched: {},
    isDirty: false,
    isValid: false,
    submitCount: 0,
    isSubmitting: false,
    isValidating: false,
    isSubmitted: false,
    isValidated: false,
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState(state => ({ values: { ...state.values, [name]: value } }));
  }

  handleBlur = (e?: React.FormEvent<HTMLInputElement>) => {
    console.log(e, 'handleBlur 1');
  }

  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e);
    console.log('handleFocus 1');
  }

  setSubmitting = (isSubmitting: boolean) => {
    this.setState({ isSubmitting });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { values } = this.state;
    const { onSubmit } = this.props;

    this.setState({ isSubmitting: true }, () => {
      if (onSubmit) {
        onSubmit(values, { e, setSubmitting: this.setSubmitting });
      }
    });
  }

  handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('reset', e);
  }

  render () {
    const { children } = this.props;
    const {
      errors,
      values,
      touched,
      isDirty,
      isValid,
      submitCount,
      isSubmitted,
      isValidated,
    } = this.state;

    if (isObject(children) && !isEmptyChildren(children)) {
      return React.Children.map(children, (node: React.ReactNode | any) =>
        React.cloneElement(node, {
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onInput: this.handleChange,
          onChange: this.handleChange,
        }),
      );
    }

    return children({
      errors,
      values,
      touched,
      isDirty,
      isValid,
      submitCount,
      isSubmitted,
      isValidated,
      handleBlur: this.handleBlur,
      handleFocus: this.handleFocus,
      handleReset: this.handleReset,
      handleInput: this.handleChange,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    });
  }
}

export default SyntheticForm;
