import styled, { css } from 'styled-components/macro';

import { CommonStyles } from 'themes';

type Props = {
  empty?: boolean;
  active?: boolean;
  filled?: boolean;
};

export const Container = styled.div<Props>`
  color: ${CommonStyles.themeColor};

  ${({ empty }) => empty && css`
    color: blue;
  `}

  ${({ active }) => active && css`
    color: black;
  `}

  ${({ filled }) => filled && css`
    color: red;
  `}
`;

export const StyledButton = styled.button``;
