import styled, { css } from 'styled-components/macro';

import { CommonStyles } from '@themes/CommonStyles';

type Props = {
  empty?: boolean;
  active?: boolean;
  filled?: boolean;
};

const blueColor = css`
  color: blue;
`;

const blackColor = css`
  color: black;
`;

const redColor = css`
  color: red;
`;

export const Container = styled.div<Props>`
  color: ${CommonStyles.themeColor};
  ${({ empty }) => empty && blueColor}
  ${({ active }) => active && blackColor}
  ${({ filled }) => filled && redColor}
`;

export const StyledButton = styled.button``;
