import styled from 'styled-components/macro';

import { Colors } from 'themes';

const themeColor = ({ theme }: any, theme1: string, theme2: string) => (theme.whiteColor ? theme1 : theme2);

export const Layout = styled.div`
  padding: 0;
  min-height: 100vh;
  color: ${(p: any) => themeColor(p, Colors.gray, Colors.black)};
  font-family: ${(p: any) => p.theme.fontFamily};
  background-color: ${(p: any) => themeColor(p, Colors.white, Colors.white)};
`;

export const Section = styled.div`
  margin: 0;
  padding: 15px;
`;
