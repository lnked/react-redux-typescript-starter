import { useState } from 'react';

import { StyledLabel, StyledInput, StyledBox, StyledText } from './styles';

export interface Props {
  checked?: boolean;
}

export const Checkbox = ({ checked = false }: Props) => {
  const [isChecked, setChecked] = useState(checked);

  const handleChange = () => setChecked(prevState => !prevState);

  return (
    <StyledLabel>
      <StyledInput type="checkbox" value={1} checked={isChecked} onChange={handleChange} />

      <StyledBox />

      <StyledText>{isChecked ? 'checked' : 'UnChecked'}</StyledText>
    </StyledLabel>
  );
};
