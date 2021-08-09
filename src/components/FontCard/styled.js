import styled from 'styled-components';
 export const CardBox = styled.div`
    min-height:200px;
    flex-grow:1;
    padding:15px;
    border:1px solid #e6e6e6;
    box-shadow: 2px 3px #cccccc;
    margin:15px ;
    display :flex;
    flex-direction:column;
 `;

 export const Description = styled.div`
    display :flex;
    flex-direction:row;
    align-items:flex-start;
    font-size :12px;
    margin-top:5px;
 `;

 export const TextBox=styled.div`
   display: flex;
   flex-direction:column;
   align-items:flex-start;
   width:50%;
 `;
 
 export const Togglebtn=styled.div`
   display: flex;
   flex-direction:column;
   align-items:flex-end;
   width:50%;
 `;

 export const Image = styled.img`
   width: 46%;
   float: left;
   margin-right: 10px;
   margin:20px 20px 20px 20px;
`;

 export const GreyText =styled.p`
    color:#848383;
    padding :5px ;
 `;

 export const FontName =styled.p`
    font-weight:Bold;
    padding :5px 5px 5px 0;
 `;
