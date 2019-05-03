import styled from '@emotion/styled';

import { colors } from 'theme';

export const Layout = styled.div`
  padding: 0;
  min-height: 100vh;
  color: ${(p: any) => (p.theme.whiteColor ? colors.gray : colors.black)};
  font-family: ${(p: any) => p.theme.fontFamily};
  background-color: ${(p: any) => (p.theme.whiteColor ? colors.white : colors.white)};
`;

export const Section = styled.div`
  margin: 0;
  padding: 15px;
`;
