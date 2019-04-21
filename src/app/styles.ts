import { css } from '@emotion/core';
import { colors } from 'theme';

/* tslint:disable: max-line-length */
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
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    font-size: 1.4rem;
  }

  .wrapper {
    overflow: hidden;
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
`;

export default GlobalStyle;
