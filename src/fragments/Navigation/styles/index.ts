import styled from 'styled-components/macro';

import { PreloadLink } from '@components/PreloadLink';
import { Colors } from '@themes/Colors';

export const Nav: any = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #20232a;
`;

export const Language: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavigationList: any = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
`;

export const NavigationItem: any = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const NavigationLink: any = styled(PreloadLink)`
  color: ${Colors.white};
  padding: 0;
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 0.066ex;
  display: inline-block;
  text-decoration: none;
  transition: color 0.25s ease-in-out;

  &:hover {
    color: #61dafb;
  }

  &.active {
    color: #61dafb;
  }
`;
