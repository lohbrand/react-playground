import React from "react";
import styled from "styled-components";
import { LightContext } from "../contexts";

const H1Styled = styled.h1`
  color: ${(props) =>
    props.isLight ? props.theme.fontcolor[0] : props.theme.fontcolor[1]};
  font-size: ${(props) => props.theme.fontsize[0]};
  text-transform: uppercase;
`;

export const H1 = ({ children }) => {
  const isLight = React.useContext(LightContext);
  return <H1Styled isLight={isLight}>{children}</H1Styled>;
};

const H2Styled = styled.h2`
  color: ${(props) =>
    props.isLight ? props.theme.fontcolor[0] : props.theme.fontcolor[1]};
  font-size: ${(props) => props.theme.fontsize[1]};
  text-transform: uppercase;
`;

export const H2 = ({ children }) => {
  const isLight = React.useContext(LightContext);
  return <H2Styled isLight={isLight}>{children}</H2Styled>;
};

const H3Styled = styled.h3`
  color: ${(props) =>
    props.isLight ? props.theme.fontcolor[0] : props.theme.fontcolor[1]};
  font-size: ${(props) => props.theme.fontsize[2]};
`;

export const H3 = ({ children }) => {
  const isLight = React.useContext(LightContext);
  return <H3Styled isLight={isLight}>{children}</H3Styled>;
};

const PStyled = styled.p`
  color: ${(props) =>
    props.isLight ? props.theme.fontcolor[0] : props.theme.fontcolor[1]};
  font-size: ${(props) => props.theme.fontsize[3]};
`;

export const P = ({ children }) => {
  const isLight = React.useContext(LightContext);
  return <PStyled isLight={isLight}>{children}</PStyled>;
};

const SectionStyled = styled.section`
  color: white;
  /* Pass variables as inputs */
  padding: 0.3em;
  /* Adjust the background from the properties */
  background: ${(props) => props.background || "cornflowerblue"};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Section = ({ children }) => {
  const isLight = React.useContext(LightContext);
  return <SectionStyled isLight={isLight}>{children}</SectionStyled>;
};
