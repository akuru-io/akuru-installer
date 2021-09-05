import styled, { keyframes } from "styled-components";

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const Label = styled.label`
  position: relative;
  font-size:12px;
  display: inline-block;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0.6em 1em;
  padding-left: 10px;
`;

export const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

export const Indicator = styled.div`
  width: 13px;
  height: 13px;
  background: ${props =>props.checked ?'#5090f1':'#e6e6e6'};
  position: absolute;
  top: 0em;
  left: -1em;
  border: 1px solid #757575;
  border-radius: 0.2em;


  ${Label}:hover & {
    background: #5090f1;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 1px;
    left: 4px;
    width: 20%;
    height: 45%;
    border: solid #ffff;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;