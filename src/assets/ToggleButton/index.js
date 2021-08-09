import {
    CheckBoxWrapper,
    CheckBox,
    CheckBoxLabel,
}from './styled';

export default function ToggleButton(){
    return(
        <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    );
}