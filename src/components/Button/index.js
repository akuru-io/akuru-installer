import styled from 'styled-components';

const BlueButton = styled.button`
    min-height:30px;
    width:fit-content;
    background-color:#5090f1;
    color:#ffff;
    padding:10px 15px;
    margin:10px;
    font-size:16px;
`;

export default function Button({
    text ,
    onclick,
}){
return(
    <BlueButton onClick={()=>onclick()}>
        {text}
    </BlueButton>
 );

};