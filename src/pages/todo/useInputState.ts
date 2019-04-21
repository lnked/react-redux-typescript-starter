import { useState } from 'react';

const useInputState = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    reset: () => setValue(''),
  };
};

export default useInputState;
