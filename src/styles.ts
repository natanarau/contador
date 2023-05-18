import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #25211E;
    height: 100vh;
  }
  h2, h4, h6 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
