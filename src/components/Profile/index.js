import {
    Text,
    ProfileBox,
    ProfileIcon,
  } from './styled';

export default function Profile (){
    const name = "Pathum Egodawatta"
    return(
        <ProfileBox>
            <ProfileIcon/>
            <Text>{name}</Text>
        </ProfileBox>

    );
}