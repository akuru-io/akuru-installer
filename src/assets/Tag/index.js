import styled from 'styled-components';

export const TagCom =styled.div`
    color:red;
    width: 35px;
    height:15px;
    font-size:12px;
    text-align : center;
    border: 1px solid red;
    padding:5px 2px 2px 2px;
    background-color:#e8e3e3;
    margin: 0 5px;
`;

export default function Tag(){
    return(
        <TagCom>
            dev
        </TagCom>
    );

}