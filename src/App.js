import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./shared-styles/global";
import theme from "./shared-styles/theme";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <Routes />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
