import { useSelector,useDispatch } from 'react-redux';
import Tag from '../Tag';
import ToggleButton from '../ToggleButton';
import Button from '../Button';
import { 
    updateFont as acUpdateFont
  } from 'store/reducers/fontSlice';

import {
    getFontFamily,
    getStyleCount,
    getVersion,
    getfoundry,
    getFontImageUrl,
    getTag ,
    isInstalledFont,
    prepareFont,
} from'../../utils/font';

import {
    CardBox,
    FontName,
    Description,  
    GreyText,
    TextBox,
    Togglebtn,
    Image,
    Box,
    SubBox,
} from './styled';
import { useState } from 'react';

export default function FontCard({
    fontItem,
    toggleEnabled = true,
    buttonText,
    onClickButton,
}){
    const dispatch = useDispatch();
    const showtag = fontItem && fontItem.tags.length>0? true:false;
    const [toggle,setToggle] =useState(true);
    const [installedFont, setInstalledFont]=useState(isInstalledFont(fontItem));
    const {fonts,fontCategory,currentLang}= useSelector((state) => state.fonts);
 

    
    const onclick =(val)=>{
        setInstalledFont(val);
        dispatch(acUpdateFont(prepareFont(fontItem)))
    }
    return(
        <>
        {fontItem && (
        <CardBox id= {fontItem.id}>
            {getFontImageUrl(fontItem) && (
                <Image src={getFontImageUrl(fontItem) } />
             )}
            <Box>
                <SubBox>
                    <Description>
                        <FontName>{getFontFamily(fontItem)}</FontName>
                        <GreyText>{getVersion(fontItem)}</GreyText>
                        { showtag && (
                            <Tag value={getTag (fontItem)}/>
                        )}
                        <GreyText>{getStyleCount(fontItem)} files</GreyText>
                    </Description>
                    <Description>
                        <TextBox>
                        {getfoundry(fontItem)}
                        </TextBox>
                    </Description>
                </SubBox>
           
                <Togglebtn>
                    {!installedFont &&(
                        <ToggleButton 
                        id={"checkBox"+fontItem.id}
                        checked={toggle}
                        onChange={onclick}
                        />
                    )}
                    {installedFont && buttonText &&(
                        <Button text={buttonText} onclick ={onClickButton}/>
                    )}
                </Togglebtn>
            </Box>
        </CardBox>
        )}
        </>
    );
}