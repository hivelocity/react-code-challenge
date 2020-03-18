import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${({
  theme: { colors, font, layout, spacing }
}) => css`
  html {
    background-color: ${colors.white};
  }

  body {
    font-family: ${font.family};
    font-weight: ${font.weights.normal};
    font-size: ${font.sizes.medium}px;
    margin: 0 auto;
    padding: ${spacing.big}px;
    color: ${colors.black};
    overflow-x: hidden;
    overflow-y: scroll;
    max-width: ${layout.maxWidth}px;
  }

  * {
    box-sizing: border-box;
  }
`}`;

export default GlobalStyles;
