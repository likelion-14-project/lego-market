import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  width: 100%;
  padding: 13px 0px;
  border: none;
  border-radius: 44px;
  background: ${(props) => props.background};
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

function Button(props) {
  const { onClick, content, background, disabled } = props;

  return <StyledButton {...props}>{content}</StyledButton>;
}

export default Button;
