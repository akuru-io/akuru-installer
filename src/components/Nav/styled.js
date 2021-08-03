import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 25%;
  background: #878383;
  padding:30px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

export const MenuItem = styled.li`
  cursor: pointer;
  padding:10px;
  background-color:red;
  width : 100%;
  list-style-type:none;
`;
