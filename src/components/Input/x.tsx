import { useState, useCallback, ChangeEvent } from 'react';

export const Example = () => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return <input value={value} onChange={handleChange} />;
};
