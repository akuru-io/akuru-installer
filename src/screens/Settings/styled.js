import styled from 'styled-components';
import inforIconSource from '../../assets/Icon/InfoIcon';

export const Layout = styled.div`
    display:flex;    
    padding:20px;
    flex-direction: column;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px;
`;

export const RowBox =styled.div`
    display: flex;
    flex-direction: row;
`;

export const ColumnBox =styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const HeaderTitle =styled.div`
    font-size:36px;
    justify-content:flex-start ;
    width:100%;
    margin-top:40px;
`;

export const Text =styled.p`
    font-size : 12px;
    margin :5px;
`;

export const DropdownBox = styled.div`
    margin-top:20px;
    width:150px
`;

export const InputBox = styled.div`
    width:400px;
`;

export const GrayText =styled.p`
    font-size : 12px;
    margin :5px;
    color:#878383;
`;

export const InforIcon = styled(inforIconSource)`
    color:#878383 !important;
    align-self: center;
    margin:0 0 0 5px ;
    font-weight: bold;
`;
