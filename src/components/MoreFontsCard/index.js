import Button from '../Button';

import {
    Card,
    Title,
    Text,
} from './styled';

export default function MoreFontsCard(){

    const onclick=()=>{
        console.log("clicked Subscribed");
        // ToDo
    };

    return(
        <Card>
            <Title>Want more fonts?</Title>
            <Button 
                text ='Subscribe Now' 
                onclick= {onclick}
            />
            <Text>
            Please log in to your Akuru Subscription get
            <br />
            latest and greatest Sinhala and Tamil fonts on your desktop.
            </Text>
        </Card>
    );
};