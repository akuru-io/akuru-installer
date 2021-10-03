import {
    InputField,
} from './styled';

export default function Input ({
    placeholder,
    onChange,
    value,
    ...props
}){
    return(
        <InputField 
        type="text" 
        placeholder={placeholder} 
        onChange={(e) => onChange(e.target.value)}
        value = {value}
        {...props}/>
    );
};