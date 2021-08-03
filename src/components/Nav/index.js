import { Link } from 'react-router-dom';

import {
    Wrapper,
    Menu,
    MenuItem,
  } from './styled';

export default function Nav() {
    return(
        <Wrapper>
            <Menu>
                
                <Link to="/">
                <MenuItem>
                    All Fonts
                    </MenuItem>
                </Link>
               
                <MenuItem>
                <Link to="/">
                   Installed
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to="/">
                    Updates
                 </Link>
                </MenuItem>
            </Menu>
            
        </Wrapper>

    )

}