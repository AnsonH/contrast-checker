import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyles = createGlobalStyle`
  ${variables};

  html {
    font-size: 62.5%; // If default font size is 16px, then 1rem = 10px
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h2 {
    margin: 0;
    color: white;
    font-size: 2.6rem;
    font-weight: 600;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: var(--font-sans);
    outline: none;
  }
`;

export default GlobalStyles;
