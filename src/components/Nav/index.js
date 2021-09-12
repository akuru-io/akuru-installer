import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { 
    setCurrentFontCategory as acSetCurrentFontCategory,
} from 'store/reducers/fontSlice';

import ProfileBox from '../Profile';


import {
    Box,
    Text,
    Logo,
    Menu,
    Wrapper,
    Divider,
    MenuItem,
    MenuText,
    BottomBar,
    AboutIcon,
    ContentBox,
    SettingBox,
    UpdatesIcon,
    SettingIcon,
    AllFontsIcon, 
    InstalledFontsIcon,
    BlueDot,
    // PremiumIcon,
  } from './styled';
import { useState } from 'react';

export default function Nav() {
    const dispatch = useDispatch();
    const [active, setActive] = useState();

    const onClick =(type) =>{
        dispatch(acSetCurrentFontCategory(type));
        setActive(type);
    }

    return(
        <Wrapper>
            <Logo />
            <Menu>
                <Link style={{textDecoration:"none"}} to ="/">
                    <MenuItem active ={!active} onClick ={()=>onClick(null)}>
                        <AllFontsIcon />
                        <MenuText>All Fonts</MenuText>
                    </MenuItem>
                
                    <MenuItem active={active === 'installed'} onClick ={()=>onClick('installed')}> 
                        <InstalledFontsIcon />
                        <MenuText>Installed Fonts</MenuText>
                    </MenuItem>

                    <MenuItem active={active === 'updates'} onClick ={()=>onClick('updates')}>
                     <UpdatesIcon />
                        <MenuText>Updates</MenuText>
                        <BlueDot/>
                    </MenuItem>
                </Link>


                {/* <Link style={{textDecoration:"none"}} to ="/premium">
                <MenuItem>
                    <PremiumIcon />
                    <MenuText>Premium</MenuText>
                </MenuItem>
               </Link> */}

               {/*<Link style={{textDecoration:"none"}} to ="/vote">
                <MenuItem>
                    <VoteForFontsIcon />
                    <MenuText>Vote for Fonts</MenuText>
                </MenuItem>
               </Link> */}

            </Menu>

            <Divider />

            < ContentBox>
                <MenuText>
                    Text
                </MenuText>
            </ContentBox>

            <Divider />

            < ContentBox>
                <MenuText>
                    Sponsors
                </MenuText>
            </ContentBox>
            <Divider /> 
            <BottomBar >
                <ProfileBox />
                <SettingBox>
                    <Box>
                        <SettingIcon />
                            <Link style={{textDecoration:"none"}}to ="/settings">
                                < Text>Settings</Text>
                            </Link>
                    </Box>
                    <Box>
                        <AboutIcon />
                            <Link style={{textDecoration:"none"}} to ="/settings">
                                < Text>About</Text>
                            </Link>
                    </Box>
                </SettingBox>
            </BottomBar>  
        </Wrapper>
    )
}