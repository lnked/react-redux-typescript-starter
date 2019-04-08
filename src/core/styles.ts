import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { PreloadLink } from 'components'

import { colors } from 'theme'

const GlobalStyle = css`
  *,
  &:after,
  &:before {
    box-sizing: border-box;
  }

  #app-root {
    min-height: 100%;
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    font-size: 1.4rem;
  }

  h1, h2, h3 {
    margin: 0;
  }

  h1 {
    color: red;
    font-size: 2rem;
  }

  h2 {
    color: green;
    font-size: 1.8rem;
  }

  h3 {
    color: ${colors.primary};
    font-size: 1.6rem;
  }
`

export const StyledContainer = styled.div`
  padding: 15px;
  min-height: 100vh;
  color: ${(p: any) => (p.theme.whiteColor ? colors.gray : colors.black)};
  font-family: ${(p: any) => p.theme.fontFamily};
  background-color: ${(p: any) => (p.theme.whiteColor ? colors.white : colors.white)};
`

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const StyledLink = styled(PreloadLink)`
  color: ${(p: any) => p.theme.whiteColor ? colors.gray : colors.black};
  padding: 2px 0;
  font-weight: 500;
  display: inline-block;
  text-decoration: none;

  &.active {
    color: ${colors.red};
  }
`

export default GlobalStyle
