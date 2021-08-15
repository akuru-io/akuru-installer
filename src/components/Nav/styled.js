import styled from 'styled-components';
import LogoSource from '../../assets/Icon/Logo';
import AboutIconSource from '../../assets/Icon/AboutIcon';
import UpdatesIconSource from '../../assets/Icon/UpdatesIcon';
import SettingIconSource from '../../assets/Icon/SettingIcon';
import AllFontsIconSource from '../../assets/Icon/AllFontsIcon';
import InstalledFontsIconSource from '../../assets/Icon/InstalledFontsIcon';
import PremiumIconSource  from '../../assets/Icon/PremiumIcon';
import VoteForFontsIconSource  from '../../assets/Icon/VoteForFontsIcon';

export const Wrapper = styled.div`
  width: 15%;
  background: #4E4D4D;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:80rem){
    width: 25%;
  }
  
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width : 100%;
  height:40%;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  padding:10px 10px 10px 15px;
  display: flex;
  flex-direction:row;
  list-style-type:none;
  &:hover{
      background: rgba(215,212,212, 0.3);
    }
`;

export const MenuText =styled.p`
  color :#FFFFFF;
  align-self: left;
  font-weight: 900;
  font-size :15px;
  padding-top: 8px;
  padding-left :5px;
`;

export const Text =styled.p`
  color:#878383;
  padding-top: 8px;
  font-size:14px;
  font-weight:bold;
`;

export const Divider = styled.hr`
  border-top: 1px solid #383636;
  padding :5px;
  margin: 15px 10px;
`;

export const ContentBox = styled.div`
  height : 30%;
  Padding:20px;
`;

export const BottomBar = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom:10px;
`;

export const SettingBox =styled.div`
  display:flex;
  flex-direction: row;
`;

export const AllFontsIcon = styled(AllFontsIconSource)`
  color: #FFFFFF;;
  min-width: 32px;
  min-height:32px;
  align-self: left;
  padding : 0 5px;
  font-weight: bold;
`;

export const InstalledFontsIcon = styled(InstalledFontsIconSource)`
  color: White;
  min-width: 32px;
  min-height:32px;
  align-self: left;
  padding : 0 5px;
  font-weight: bold;
`;

export const UpdatesIcon = styled(UpdatesIconSource)`
  color: White;
  min-width: 32px;
  min-height:32px;
  align-self: left;
  padding : 0 0 0 10px;
  font-weight: bold;
`;

export const PremiumIcon = styled(PremiumIconSource)`
  color: White;
  min-width: 32px;
  min-height:32px;
  align-self: left;
  padding: 0 0 0 10px!important;
  font-weight: bold;
`;

export const VoteForFontsIcon = styled(VoteForFontsIconSource)`
  color: White;
  min-width: 32px;
  min-height:32px;
  align-self: left;
  padding : 0 0 0 50px;
  font-weight: bold;
`;

export const SettingIcon = styled(SettingIconSource)`
  align-self: left;
  padding : 5px 5px 10px 20px;
  font-weight: bold;
  `;

export const AboutIcon = styled(AboutIconSource)`
  align-self: left;
  padding : 5px 5px 10px 20px;
  font-weight: bold;
`;

export const Logo = styled(LogoSource)`
  margin: 20px 20px 10px 20px ;
  min-width : 50px;
  min-height :50px;
`;