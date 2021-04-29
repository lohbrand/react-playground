import React from "react";
import styled from "styled-components";
import { LightContext } from "../contexts";

const TextStyled = styled.div`
  color: ${(props) =>
    props.isLight ? props.theme.fontcolor[0] : props.theme.fontcolor[1]};
  font-size: ${(props) => props.theme.fontsize[4]};
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Text = ({ children }) => {
  const isLight = React.useContext(LightContext);
  return <TextStyled isLight={isLight}>{children}</TextStyled>;
};
