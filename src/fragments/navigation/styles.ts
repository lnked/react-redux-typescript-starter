import styled from '@emotion/styled'
import { PreloadLink } from 'components'

import { colors } from 'theme'

export const NavigationList = styled.ul`
  position: sticky;
  top: 0;
  z-index: 10;
  margin: 0;
  border: 0;
  padding: 20px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #20232a;
`

export const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`

export const NavigationLink = styled(PreloadLink)`
  color: ${colors.white};
  padding: 0;
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: .066ex;
  display: inline-block;
  text-decoration: none;
  transition: color .25s ease-in-out;

  &:hover {
    color: #61dafb;
  }

  &.active {
    color: #61dafb;
  }
`
