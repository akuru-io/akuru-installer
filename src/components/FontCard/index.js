import Tag from '../../assets/Tag';
import ToggleButton from '../../assets/ToggleButton';

import {
    getFontObject,
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
} from './styled';

export default function FontCard(
    fontItem,
){
    const font =getFontObject(fontItem);
    return(
        <>
        {font && (
        <CardBox>
            {getFontImageUrl(font) && (
                <Image src={getFontImageUrl(font) } />
             )}
            <Description>
                <FontName>{getFontFamily(font)}</FontName>
                <GreyText>{getVersion(font)}</GreyText>
                <Tag />
                <GreyText>{getStyleCount(font)} files</GreyText>
            </Description>
            <Description>
                <TextBox>
                   {getfoundry(font)}
                </TextBox>
                <Togglebtn>
                    <ToggleButton />
                </Togglebtn>
            </Description>
        </CardBox>
        )}
        </>
    );
}