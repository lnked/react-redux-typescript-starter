import { createGlobalStyle } from 'styled-components'

const bluegrey: string = '#2b3a44'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    font-size: 1.4rem;
    font-family: ${(p: any) => p.theme.fontFamily}
    color: ${(p: any) => (p.theme.whiteColor ? 'white' : 'black')}
    background-color: ${(p: any) => (p.theme.whiteColor ? 'black' : 'white')}
  }

  h1 {
    color: red;
    margin: 0;
    font-size: 2rem;
  }

  h2 {
    color: green;
    margin: 0;
    font-size: 1.8rem;
  }

  h3 {
    color: ${bluegrey}
    margin: 0;
    font-size: 1.6rem;
  }
`

export { GlobalStyle }
