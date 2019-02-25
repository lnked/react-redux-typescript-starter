// import { createGlobalStyle } from 'styled-components'
import { css } from '@emotion/core'

const bluegrey: string = '#2b3a44'

// const GlobalStyle = createGlobalStyle`
const GlobalStyle = css`
  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    font-size: 1.4rem;
    font-family: arial, sans-serif;
    /* color: ${(p: any) => (p.theme.whiteColor ? 'white' : 'black')}; */
    /* font-family: ${(p: any) => p.theme.fontFamily};
    background-color: ${(p: any) => (p.theme.whiteColor ? 'black' : 'white')}; */
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
    color: ${bluegrey};
    font-size: 1.6rem;
  }
`

export default GlobalStyle
