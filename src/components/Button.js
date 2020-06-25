import React from "react";
import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  background-color: red;
  color: black;
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  width: 155px;
  margin: 5px;
  transition: all 0.5s;
  &:hover {
    background: white;
    padding-right: 50px;
  }
`;

const Button = ({ id, children, onClick }) => (
  <StyledButton id={id} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
