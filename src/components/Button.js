import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: red;
  color: black;
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  width: 155px;
`;

const Button = ({ id, children }) => (
  <StyledButton id={id}>{children}</StyledButton> //props.children
);

export default Button;

// react router - page forwarding
