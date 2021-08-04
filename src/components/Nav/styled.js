import styled from 'styled-components';
import AllFontsIconSource from '../../assets/AllFontsIcon';
import InstalledFontsIconSource from '../../assets/InstalledFontsIcon';
import UpdatesIconSource from '../../assets/UpdatesIcon';
import LogoSource from '../../assets/Logo';

export const Wrapper = styled.div`
  width: 25%;
  background: #878383;
  
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width : 100%;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  padding:10px 10px 10px 20px;
  display: flex;
  flex-direction:row;
  list-style-type:none;
  text-decoration: none;
`;

export const Text =styled.p`
  color :#FFFFFF;
  align-self: left;
  font-weight: 900;
  font-size :15px;
  text-decoration: none;
`;

export const AllFontsIcon = styled(AllFontsIconSource)`
  color: #FFFFFF;;
  width: 24px;
  align-self: left;
  padding : 0 5px;
  font-weight: bold;
`;

export const InstalledFontsIcon = styled(InstalledFontsIconSource)`
  color: White;
  width: 24px;
  align-self: left;
  padding : 0 5px;
  font-weight: bold;
`;

export const UpdatesIcon = styled(UpdatesIconSource)`
  color: White;
  width: 24px;
  align-self: left;
  padding : 0 5px;
  font-weight: bold;
`;

export const Logo = styled(LogoSource)`
  padding: 25px;
  width : 24px;
  height :24px;
`