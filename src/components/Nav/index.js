import { Link } from 'react-router-dom';

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
    PremiumIcon,
    VoteForFontsIcon,
    InstalledFontsIcon,
  } from './styled';

export default function Nav() {
    return(
        <Wrapper>
            <Logo />
            <Menu>
                <Link style={{textDecoration:"none"}} to ="/">
                <MenuItem>
                    <AllFontsIcon />
                    <MenuText>All Fonts</MenuText>
                </MenuItem>
               </Link>

               <Link style={{textDecoration:"none"}} to ="/installed-fonts">
                <MenuItem>
                    <InstalledFontsIcon />
                    <MenuText>Installed Fonts</MenuText>
                </MenuItem>
               </Link>

               <Link style={{textDecoration:"none"}} to ="/updates">
                <MenuItem>
                    <UpdatesIcon />
                    <MenuText>Updates</MenuText>
                </MenuItem>
               </Link>

               <Link style={{textDecoration:"none"}} to ="/premium">
                <MenuItem>
                    <PremiumIcon />
                    <MenuText>Premium</MenuText>
                </MenuItem>
               </Link>

               <Link style={{textDecoration:"none"}} to ="/vote">
                <MenuItem>
                    <VoteForFontsIcon />
                    <MenuText>Vote for Fonts</MenuText>
                </MenuItem>
               </Link>

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