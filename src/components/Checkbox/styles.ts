/* tslint:disable: max-line-length */
import styled from 'styled-components/macro';

export const StyledLabel = styled.label`
  display: inline-block;
  padding-left: 1.2em;
  border-radius: ${(p: any) => (p.circle ? '50%' : 0)};
`;

export const StyledInput = styled.input`
  position: absolute;
  appearance: none;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

export const StyledBox = styled.span`
  position: absolute;
  margin-left: -1.2em;
  width: 1em;
  height: 1em;
  background-image: url(https://cdn.glitch.com/d6162378-5823-4160-a555-3d9789bd2b92%2Foff.svg?1550563355034);

  /* Checked */
  ${StyledInput}:checked + & {
    background-image: url(https://cdn.glitch.com/d6162378-5823-4160-a555-3d9789bd2b92%2Fon.svg?1550563355439);
  }

  /* Focused */
  ${StyledInput}:focus + & {
    background-image: url(https://cdn.glitch.com/d6162378-5823-4160-a555-3d9789bd2b92%2Foff-focused.svg?1550563355021);
  }

  ${StyledInput}:checked:focus + & {
    background-image: url(https://cdn.glitch.com/d6162378-5823-4160-a555-3d9789bd2b92%2Fon-focused.svg?1550563355063);
  }

  /* Disabled */
  ${StyledInput}:disabled + & {
    background-image: url(https://cdn.glitch.com/d6162378-5823-4160-a555-3d9789bd2b92%2Foff-disabled.svg?1550563354916);
  }

  ${StyledInput}:checked:disabled + & {
    background-image: url(https://cdn.glitch.com/d6162378-5823-4160-a555-3d9789bd2b92%2Fon-disabled.svg?1550563354883);
  }
`;

export const StyledText = styled.span`
  font-size: 1.4rem;
`;
