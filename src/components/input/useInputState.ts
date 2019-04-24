import { useState } from 'react';

import { eventType, InnerState } from './types';

const useInputState = ({ defaultValue, handleChange }: InnerState) => {
  const [touch, setTouch] = useState(false);
  const [value, setValue] = useState(defaultValue);

  if (!touch && value !== defaultValue) {
    setTouch(false)
    setValue(defaultValue);
  }

  return {
    touch,
    value,
    onChange: (e: eventType) => {
      const { value } = e.target;

      setTouch(true);
      setValue(value);
      handleChange && handleChange(e);
    },

    onFocus: () => setTouch(true),

    onBlur: () => setTouch(false),

    reset: () => setValue(''),
  };
};

export default useInputState;
