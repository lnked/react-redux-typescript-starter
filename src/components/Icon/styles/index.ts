import styled, { css } from 'styled-components';

import { CommonStyles } from 'themes';

export const StyledDiv = styled.div`
  color: ${CommonStyles.themeColor};

  ${props => props.empty && css`
    color: blue;
  `}

  ${props => props.active && css`
    color: black;
  `}

  ${props => props.filled && css`
    color: red;
  `}
`;

export const StyledButton = styled.button``;
