import styled from 'styled-components';
import SearchIconResource from '../../assets/Icon/SearchIcon';

export const SearchInput = styled.input`
    width:150px;
    border: 1px solid #E2E2E2;
    padding :0.5rem 0.5rem 0.5rem 1.5rem;
    height:15px;
    &:focus,
    &:active {
      outline: none;
    }
`;

export const SearchIcon = styled(SearchIconResource)`
     position: relative;
     left: 1.5rem;
     top: 0.5rem;
`;