import styled from 'styled-components';
import LogoSource from '../../assets/Icon/Logo';
import AboutIconSource from '../../assets/Icon/AboutIcon';
import UpdatesIconSource from '../../assets/Icon/UpdatesIcon';
import SettingIconSource from '../../assets/Icon/SettingIcon';
import AllFontsIconSource from '../../assets/Icon/AllFontsIcon';
import InstalledFontsIconSource from '../../assets/Icon/InstalledFontsIcon';
import PremiumIconSource  from '../../assets/Icon/PremiumIcon';
import VoteForFontsIconSource  from '../../assets/Icon/VoteForFontsIcon';
import BlueDotSource from 'assets/Icon/BlueDot';

export const Wrapper = styled.div`
  min-width: 292px;
  background: #4E4D4D;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:100rem){
   
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
      background: rgba(215,212,212, 0.3)!important;
    };
  :active{
      background: rgba(215,212,212, 0.3)!important;
    };
 
`;

export const MenuText =styled.p`
  color :#FFFFFF;
  align-self: left;
  font-weight: 900;
  font-size :15px;
  padding-top: 5px;
  padding-left :10px;
`;

export const Text =styled.p`
  color:#878383;
  padding-top: 4px;
  font-size:14px;
  font-weight:bold;
`;

export const Divider = styled.hr`
  border-top: 1px solid #383636;
  padding :0px;
  margin: 15px 10px;
`;

export const ContentBox = styled.div`
  height : 30%;
  Padding:0 5px 10px 15px;
`;

export const BottomBar = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  padding:0 5px 10px 15px;
`;

export const SettingBox =styled.div`
  display:flex;
  flex-direction: row;
`;

export const Box =styled.div`
  display:flex;
  flex-direction: row;
  width:50%;
  justify-content: flex-start;
  padding:5px;
`;

export const AllFontsIcon = styled(AllFontsIconSource)`
  color: #FFFFFF;;
  min-width: 24px;
  min-height:24px;
  align-self: left;
  padding : 0 ;
  font-weight: bold;
`;

export const InstalledFontsIcon = styled(InstalledFontsIconSource)`
  color: White;
  min-width: 24px;
  min-height:24px;
  align-self: left;
  padding : 0 ;
  font-weight: bold;
`;

export const UpdatesIcon = styled(UpdatesIconSource)`
  color: White;
  min-width: 20px;
  min-height:20px;
  align-self: left;
  padding : 0 0 0 3px ;
  font-weight: bold;
`;

export const PremiumIcon = styled(PremiumIconSource)`
  color: White;
  min-width: 24px;
  min-height:24px;
  align-self: left;
  padding: 0 ;
  font-weight: bold;
`;

export const VoteForFontsIcon = styled(VoteForFontsIconSource)`
  color: White;
  min-width: 24px;
  min-height:24px;
  align-self: left;
  padding : 0 0 0 0px;
  font-weight: bold;
`;

export const SettingIcon = styled(SettingIconSource)`
  align-self: left;
  padding : 0 5px 0 0;
  font-weight: bold;
  min-width: 20px;
  min-height:20px;
  `;

export const AboutIcon = styled(AboutIconSource)`
  align-self: left;
  padding : 0 5px 0 0;
  font-weight: bold;
  min-width: 20px;
  min-height:20px;
`;

export const Logo = styled(LogoSource)`
  min-width : 50px;
  min-height :50px;
  padding : 0 0 0 0px;
  margin : 15px 15px 10px 15px;
`;

export const BlueDot =styled(BlueDotSource)`
  margin:8px 0 0 10px;
`;