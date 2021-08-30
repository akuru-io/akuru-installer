import styled from "styled-components";
import ArrowHeadResource from '../../assets/Icon/ArrowHead';

export const StyledUl = styled.ul`
  
  overflow: hidden;
  height:30px;
  width:90px;
  border: 1px solid #E2E2E2;
  margin-left:5px;
  color:black;
`;

export const StyledLi = styled.li`
  float: left;
`;

export const Dropbtn = styled.div`
  display: flex;
  color: black;
  text-alignment:center;
  text-decoration: none;
  padding:10px;
  font-size:12px;
  justify-content:space-between;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 90px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: red;
  }
`;

export const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size:12px;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const ArrowHead = styled(ArrowHeadResource)`
  margin-left:10px;
`;
