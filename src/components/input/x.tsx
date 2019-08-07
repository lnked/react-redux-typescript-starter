import * as React from 'react';

export const Example = () => {
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <input
      value={value}
      onChange={handleChange}
    />
  );
};
