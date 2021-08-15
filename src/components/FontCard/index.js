import Tag from '../../assets/Tag';
import ToggleButton from '../../assets/ToggleButton';
import Button from '../../assets/Button';

import {
    getFontFamily,
    getStyleCount,
    getVersion,
    getfoundry,
    getFontImageUrl,
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

export default function FontCard({
    fontItem,
    toggleEnabled = true,
    buttonText,
    onClick,
    key,
}){
    return(
        <>
        {fontItem && (
        <CardBox>
            {getFontImageUrl(fontItem) && (
                <Image src={getFontImageUrl(fontItem) } />
             )}
            <Box>
                <SubBox>
                    <Description>
                        <FontName>{getFontFamily(fontItem)}</FontName>
                        <GreyText>{getVersion(fontItem)}</GreyText>
                        {toggleEnabled && (
                            <Tag />
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
                        <ToggleButton id={fontItem.id}/>
                    )}
                    {!toggleEnabled && buttonText &&(
                        <Button text={buttonText} onclick ={onClick}/>
                    )}
                </Togglebtn>
            </Box>
        </CardBox>
        )}
        </>
    );
}