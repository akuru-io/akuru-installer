import Tag from '../Tag';
import ToggleButton from '../ToggleButton';
import Button from '../Button';

import {
    getFontFamily,
    getStyleCount,
    getVersion,
    getfoundry,
    getFontImageUrl,
    getTag ,
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
    const showtag = fontItem && fontItem.tags.length>0? true:false;
    const [toggle,setToggle] =useState(false);

    const onclick =(val)=>{
        console.log(val)
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
                    {toggleEnabled &&(
                        <ToggleButton 
                        id={fontItem.id}
                        title="toogle switch xs"
                        size="xs"
                        value={toggle}
                        checked={toggle}
                        onChange={onclick}
                        />
                    )}
                    {!toggleEnabled && buttonText &&(
                        <Button text={buttonText} onclick ={onClickButton}/>
                    )}
                </Togglebtn>
            </Box>
        </CardBox>
        )}
        </>
    );
}