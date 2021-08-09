import styled from 'styled-components';

import ProfileIconSource from '../../assets/Icon/ProfileIcon';

export const ProfileBox = styled.div`
  cursor: pointer;
  padding:0px 10px 15px 20px;
  display: flex;
  flex-direction:row;
`;

export const Text =styled.p`
  color :#FFFFFF;
  align-self: left;
  font-weight: 900;
  font-size :14px;
  padding-top: 3px;
  padding-left :10px;
`;

export const ProfileIcon = styled(ProfileIconSource)`
  color: White;
  align-self: left;
  font-weight: bold;
`;