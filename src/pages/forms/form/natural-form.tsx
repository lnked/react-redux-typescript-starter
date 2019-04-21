import * as React from 'react';

import Form from './';

export interface FormProps {
  children: (props: { values: any }) => any;
  onReset?: (values: any, props: any) => void;
  onSubmit?: (values: any, props: any) => void;
  className?: string;
  initialValues?: any;
  validationSchema?: any;
}

export const NaturalForm: React.FC<FormProps> = ({ className, ...props }) => (
  <form className={className}>
    <Form {...props} />
  </form>
);
