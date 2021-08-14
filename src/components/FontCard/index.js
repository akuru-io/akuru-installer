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

export default function FontCard({
    fontItem,
    key,
}){
    return(
        <>
        {fontItem && (
        <CardBox>
            {getFontImageUrl(fontItem) && (
                <Image src={getFontImageUrl(fontItem) } />
             )}
            <Description>
                <FontName>{getFontFamily(fontItem)}</FontName>
                <GreyText>{getVersion(fontItem)}</GreyText>
                <Tag />
                <GreyText>{getStyleCount(fontItem)} files</GreyText>
            </Description>
            <Description>
                <TextBox>
                   {getfoundry(fontItem)}
                </TextBox>
                <Togglebtn>
                    <ToggleButton id={fontItem.id}/>
                </Togglebtn>
            </Description>
        </CardBox>
        )}
        </>
    );
}