/* tslint:disable: max-line-length */
import styled from 'styled-components/macro';

export const BaseInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 1.4rem;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 0 0 0 rgba(19,124,189,0), inset 0 0 0 1px rgba(16,22,26,.15), inset 0 1px 1px rgba(16,22,26,.2);
  padding: 6px 10px;
  vertical-align: middle;
  color: #182026;
  font-weight: 400;
  transition: box-shadow .1s cubic-bezier(.4,1,.75,.9);
  appearance: none;

  &::placeholder {
    opacity: 1;
    color: rgba(92,112,128,.5);
  }

  &:focus {
    box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19,124,189,.3), inset 0 1px 1px rgba(16,22,26,.2);
    outline-offset: 2px;
  }

  &[readonly] {
    box-shadow: inset 0 0 0 1px rgba(16,22,26,.15)
  }

  &:disabled {
    box-shadow: none;
    background: rgba(206,217,224,.5);
    cursor: not-allowed;
    color: rgba(92,112,128,.5);
    resize: none
  }
`;

// .bp3-input.bp3-active,.bp3-input:focus {
//   box-shadow: 0 0 0 1px #137cbd,0 0 0 3px rgba(19,124,189,.3),inset 0 1px 1px rgba(16,22,26,.2)
// }

// .bp3-input.bp3-round,.bp3-input[type=search] {
//   border-radius: 30px;
//   box-sizing: border-box;
//   padding-left: 10px
// }

// .bp3-input.bp3-large {
//   height: 40px;
//   line-height: 40px;
//   font-size: 16px
// }

// .bp3-input.bp3-large.bp3-round,.bp3-input.bp3-large[type=search] {
//   padding: 0 15px
// }

// .bp3-input.bp3-small {
//   height: 24px;
//   padding-right: 8px;
//   padding-left: 8px;
//   line-height: 24px;
//   font-size: 12px
// }

// .bp3-dark .bp3-input {
//   box-shadow: 0 0 0 0 rgba(19,124,189,0),0 0 0 0 rgba(19,124,189,0),0 0 0 0 rgba(19,124,189,0),inset 0 0 0 1px rgba(16,22,26,.3),inset 0 1px 1px rgba(16,22,26,.4);
//   background: rgba(16,22,26,.3);
//   color: #f5f8fa
// }

// .bp3-dark .bp3-input::-webkit-input-placeholder {
//   color: rgba(191,204,214,.5)
// }

// .bp3-dark .bp3-input::-ms-input-placeholder {
//   color: rgba(191,204,214,.5)
// }

// .bp3-dark .bp3-input::placeholder {
//   color: rgba(191,204,214,.5)
// }

// .bp3-dark .bp3-input:focus {
//   box-shadow: 0 0 0 1px #137cbd,0 0 0 1px #137cbd,0 0 0 3px rgba(19,124,189,.3),inset 0 0 0 1px rgba(16,22,26,.3),inset 0 1px 1px rgba(16,22,26,.4)
// }

// .bp3-dark .bp3-input[readonly] {
//   -webkit-box-shadow: inset 0 0 0 1px rgba(16,22,26,.4);
//   box-shadow: inset 0 0 0 1px rgba(16,22,26,.4)
// }

// .bp3-dark .bp3-input.bp3-disabled,.bp3-dark .bp3-input:disabled {
//   -webkit-box-shadow: none;
//   box-shadow: none;
//   background: rgba(57,75,89,.5);
//   color: rgba(191,204,214,.5)
// }
