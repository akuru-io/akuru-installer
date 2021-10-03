import styled from "styled-components";

export const Select = styled.select`
  width: 100px;
  height: 33px;
  background: white;
  color: black;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #E2E2E2;
  margin-left: 10px;
  &:focus,
  &:active {
    outline: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  `;