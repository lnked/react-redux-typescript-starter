import styled from 'styled-components';

import { Colors } from 'themes';

export const Layout = styled.div`
  padding: 0;
  min-height: 100vh;
  color: ${(p: any) => (p.theme.whiteColor ? Colors.gray : Colors.black)};
  font-family: ${(p: any) => p.theme.fontFamily};
  background-color: ${(p: any) => (p.theme.whiteColor ? Colors.white : Colors.white)};
`;

export const Section = styled.div`
  margin: 0;
  padding: 15px;
`;
