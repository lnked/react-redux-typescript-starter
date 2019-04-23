import { useState } from 'react';

import { eventType, InnerState } from './types';

const useInputState = ({ defaultValue, handleChange }: InnerState) => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: (e: eventType) => {
      const { value } = e.target;

      setValue(value);
      handleChange && handleChange(value, e);
    },
    reset: () => setValue(''),
  };
};

export default useInputState;
