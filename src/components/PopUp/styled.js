import styled from 'styled-components';
import InforIconResource from 'assets/Icon/InfoIcon';
export const Container = styled.div`
position:fixed;
background: antiquewhite;
width: 33%;
height: auto;

top: ${({openPos}) => (
{
    // [CM_CENTER_CENTER]: '50%',
    // [CM_TOP_LEFT]: '10%',
    // [CM_TOP_CENTER]: '10%',
    // [CM_TOP_RIGHT]: '10%'
}[openPos])};

left: ${({openPos}) => (
{
    // [CM_CENTER_CENTER]: '50%',
    // [CM_TOP_LEFT]: '5%',
    // [CM_TOP_CENTER]: '50%',
    // [CM_TOP_RIGHT]: '95%'
}[openPos])};

transform: ${({openPos}) => (
{
    // [CM_CENTER_CENTER]: 'translate(-50%,-50%)',
    // [CM_TOP_LEFT]: 'translate(0,0)',
    // [CM_TOP_CENTER]: 'translate(-50%,0)',
    // [CM_TOP_RIGHT]: 'translate(-100%,0)'
}[openPos])};

border-radius: 10px;
padding: 0.75rem;
color: rgba(0,0,139, 0.7);
`;

export const Model = styled.div`
	z-index: auto;
	display: ${({show}) => (show ? 'flex' : 'none')};
	position: fixed;
	top: 0;
	left: 40%;
	max-height: 300px;
    background-color:#FFFF;
	width:565px;
    flex-direction:row;
    box-shadow:1px 3px 20px 0px #cccccc;
    padding:15px;
    border: 1px solid #E2E2E2;
    @media screen and (max-width:100rem){
        width:450px;
        left: 35%;
      }
`;

export const ModelContentBox =styled.div`
      display: flex;
      flex-direction:row;
`;

export const ModelProgressBox =styled.div`
      display: flex;
      flex-direction:column;
      width:40%;
`;

export const InforIcon =styled(InforIconResource)`
    display: flex;
    flex-direction:column;
    margin-right:15px;
    margin-top:5px;
    min-width:35px;
`;

export const BoldText =styled.p`
      font-weight:700;
      line-height: 28px;
      font-size :16px;
`;

export const LinkText =styled.p`
     margin: 10px 0;
     font-size: 13px;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction:column;
`;

export const ButtonArea =styled.div`
      width: 150px;
      align-self: flex-end;
      margin-top: 10px;
`;