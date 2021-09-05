import Button from '../Button';
import {
    Model,
    ModelContentBox,
    InforIcon,
    BoldText,
    ModelProgressBox,
    LinkText,
    TextBox,
    ButtonArea,

} from './styled';
export default function PopUp ({
    isShow =false,
    popUpOnclick,
}){
    const text =<>Agni is a Premium font.<br />  It is illigal to copy , share or redistribute this font file.</>
    const linkText = 'Learn more about font licecses >'
    const buttonText = 'I Understand'

	return (
    	<Model show={isShow} >
        	<ModelProgressBox>

            </ModelProgressBox>
            <ModelContentBox>
                <InforIcon />
                <TextBox>
                    <BoldText>
                        {text}
                    </BoldText>
                    <LinkText>
                        {linkText}
                    </LinkText>
                    <ButtonArea>
                        <Button 
                            text={buttonText}
                            onclick={isShow?popUpOnclick():''}
                        />
                    </ButtonArea>
                </TextBox>
            </ModelContentBox>
    	</Model>
    );
}