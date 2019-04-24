import { useState } from 'react';

import { eventType, InnerState } from './types';

const useInputState = ({ defaultValue, handleChange }: InnerState) => {
  const [touch, setTouch] = useState(false);
  const [value, setValue] = useState(defaultValue);

  if (!touch && value !== defaultValue) {
    console.error({ touch, value, defaultValue })
    setValue(defaultValue);
    setTouch(false)
  }

  return {
    touch,
    value,
    onChange: (e: eventType) => {
      const { value } = e.target;

      setValue(value);
      setTouch(true);
      handleChange && handleChange(e);
    },

    onFocus: () => setTouch(true),

    onBlur: () => setTouch(false),

    reset: () => setValue(''),
  };
};

export default useInputState;
