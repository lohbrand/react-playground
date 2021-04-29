import React from "react";
import { createGlobalStyle } from "styled-components";
import { LightContext } from "../contexts";

export const GlobalStyle = createGlobalStyle`

  body {
    background: ${(props) => (props.isLight ? "#ffffff" : "#000a12")};
    color: ${(props) => (props.isLight ? "#1f1f1f" : "#eee")};
    font-family: "Roboto", "Franklin Gothic Medium", "Arial Narrow", Arial,
      sans-serif;
    padding: 2rem 3rem;
    line-height: 1.4;
    letter-spacing: 0.0167em;
  }

  div {
    border: 0px solid black;
    box-sizing: border-box;
    display: inline;
    margin: 0px;
    padding: 0px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
`;

export const StyledTheme = (props) => {
  const isLight = React.useContext(LightContext);

  return <GlobalStyle {...props} isLight={isLight} />;
};
