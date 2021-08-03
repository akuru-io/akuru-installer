import { Link } from 'react-router-dom';


import {
    Wrapper,
    Menu,
    MenuItem,
    AllFontsIcon, 
    Text,
    InstalledFontsIcon,
    UpdatesIcon,
    Logo,

  } from './styled';

export default function Nav() {
    return(
        <Wrapper>
            <Logo />
            <Menu>
               <Link  to ="/">
               <MenuItem>
                    <AllFontsIcon />
                    <Text>All Fonts</Text>
               </MenuItem>
               </Link>

               <Link to ="/">
               <MenuItem>
                    <InstalledFontsIcon />
                    <Text>Installed Fonts</Text>
               </MenuItem>
               </Link>

               <Link to ="/">
               <MenuItem>
                    <UpdatesIcon />
                    <Text>Updates</Text>
               </MenuItem>
               </Link>
            </Menu>
            
        </Wrapper>

    )

}