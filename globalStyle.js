import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(24,24,14);
    background: linear-gradient(90deg, rgba(24,24,14,1) 0%, rgba(57,57,27,1) 35%, rgba(103,103,49,1) 100%);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export default GlobalStyle;