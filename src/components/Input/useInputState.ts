import { useState } from 'react';

import { eventType, InnerState } from './types';

export const useInputState = ({ propsValue, defaultValue, handleChange }: InnerState) => {
  const [value, setValue] = useState(defaultValue);
  const [touched, setTouch] = useState(false);

  if (handleChange && value !== propsValue) {
    // console.error({ touched, value, propsValue, defaultValue });
    setValue(propsValue);
    setTouch(false);
  }

  return {
    touched,
    defaultValue: value,
    onChange: (e: eventType) => {
      const { value } = e.target;

      setTouch(true);

      console.error({ propsValue });

      setValue(value);

      if (!propsValue) {
        console.error('xx');
      }

      handleChange && handleChange(e, value);
    },

    onFocus: () => setTouch(true),

    onBlur: () => setTouch(false),

    reset: () => setValue(''),
  };
};
