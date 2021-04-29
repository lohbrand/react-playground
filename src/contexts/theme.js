import React from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import { theme } from "../styles";
import { LightContext } from "../contexts";

const Provider = ({ children }) => {
  const isLight = React.useContext(LightContext);
  return (
    <ThemeProvider theme={theme} isLight={isLight}>
      {children}
    </ThemeProvider>
  );
};
export { ThemeContext, Provider as ThemeProvider };
