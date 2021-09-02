import {useState } from 'react';
import {useDispatch } from 'react-redux';
import {languages} from '../../utils/font';
import { 
  setCurrentLanguage as acSetCurrentLanguage, 
} from 'store/reducers/fontSlice'

import {
    StyledUl,
    Dropbtn,
    DropDownContent,
    DropDownLi,
    SubA,
    ArrowHead, 
} from './styled';

export default function DropDown(){
  const dispatch = useDispatch();
  const [currentLang, setCurrentLang] = useState('Language');
  const handleSelect = (option) => {
    setCurrentLang(option);
    dispatch(acSetCurrentLanguage(option));
  };
  return (
    <StyledUl>
      <DropDownLi>
        <Dropbtn >
          {currentLang}
          <ArrowHead />
        </Dropbtn>

        <DropDownContent>
        {languages &&languages.length>0 && languages.map((language)=> (
          <SubA 
            key ={language.id} 
            onClick = {() => handleSelect (language.name)}>{language.name}
          </SubA>
        ))}
        </DropDownContent>

      </DropDownLi>
    </StyledUl>
  );
     
}