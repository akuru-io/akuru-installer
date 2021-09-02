import {
    CheckBoxWrapper,
    CheckBox,
    CheckBoxLabel,
}from './styled';

export default function ToggleButton({
    id,
}){
    return(
        <CheckBoxWrapper key ={id}>
        <CheckBox id="checkbox" type="checkbox" name={id} />
        <CheckBoxLabel htmlFor="checkbox" id={id} />
      </CheckBoxWrapper>
    );
}