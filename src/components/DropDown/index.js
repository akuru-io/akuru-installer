import {languages} from '../../utils/font';
import { 
    Select
} from './styled';

export default function DropDown({
  currentLan ="language" ,
  handleSelect,
  isShow = true,
}){
  return (
    <Select onClick = {(value) => handleSelect (value.target.value)}>
      {isShow && (
        <option value="Language">
        Language
        </option>
      )}
       {languages &&languages.length>0 && languages.map((language)=> (
      <option
        value = {language.name}
        key ={language.id}
      >
        {language.name}
      </option>
       ))}
    </Select>
  );   
}