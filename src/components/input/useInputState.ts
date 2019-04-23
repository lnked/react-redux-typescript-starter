import { useState } from 'react';

import { InnerState } from './types'

const useInputState = ({ defaultValue, handleChange }: InnerState) => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target

      setValue(value);
      handleChange && handleChange(e, value);
    },
    reset: () => setValue(''),
  };
};

export default useInputState;
