import React from "react";
import styled from "styled-components";
import { LightContext } from "../contexts";

const ButtonStyled = styled.button`
  border-radius: 3px;
  border: none;
  font-family: inherit;
  font-weight: 700;
  letter-spacing: 0.0257em;
  cursor: pointer;
  background: ${(props) =>
    props.isLight ? props.theme.blue50 : props.theme.blue700};
  color: ${(props) =>
    props.isLight ? props.theme.gray900 : props.theme.gray100};

  outline: none;
  padding: 0.75rem 2rem;
  margin: 0.5rem;
  text-transform: uppercase;
  transition: background 0.1s;

  &:hover {
    background: ${(props) =>
      props.isLight ? props.theme.blue100 : props.theme.blue800};
  }

  &.primary {
    &:hover {
      background: ${(props) =>
        props.isLight ? props.theme.blue100 : props.theme.blue800};
    }
  }

  &.secondary {
    background: ${(props) =>
      props.isLight ? props.theme.yellow50 : props.theme.yellow800};
    color: #1f1f1f;
    &:hover {
      background: ${(props) =>
        props.isLight ? props.theme.yellow100 : props.theme.yellow900};
    }
  }

  &.warn {
    background: ${(props) =>
      props.isLight ? props.theme.red50 : props.theme.red800};
    &:hover {
      background: ${(props) =>
        props.isLight ? props.theme.red100 : props.theme.red900};
    }
  }

  &.disabled {
    background: ${(props) =>
      props.isLight ? props.theme.gray200 : props.theme.gray800};
    cursor: not-allowed;
    &:hover {
      background: ${(props) =>
        props.isLight ? props.theme.gray200 : props.theme.gray800};
    }
  }
`;

export const Button = (props) => {
  const isLight = React.useContext(LightContext);

  return (
    <ButtonStyled isLight={isLight} {...props}>
      {props.children}
    </ButtonStyled>
  );
};
