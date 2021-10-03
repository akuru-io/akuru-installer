import {
    CheckBoxWrapper,
    CheckBox,
    CheckBoxLabel,
}from './styled';

export default function ToggleButton({
    id ,
    onChange,
}){
    return(
        <CheckBoxWrapper key ={id} onChange={(e)=>onChange(e.target.checked)}>
        <CheckBox  id={id} type="checkbox" name={id} />
        <CheckBoxLabel htmlFor={id} id={id} />
      </CheckBoxWrapper>
    );
};
