import styled from "styled-components";
export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 22px;
  border-radius: 15px;
  background: #848383;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 44px;
  height: 22px;
  &:checked + ${CheckBoxLabel} {
    background: #424141;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin-left: 25px;
      transition: 0.2s;
    }
  }
`;
