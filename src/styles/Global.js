import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #888;
  }

  ul {
    list-style: none;
  }
`;
