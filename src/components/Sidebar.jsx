import React from 'react'
import styled from 'styled-components';

import ForumIcon from '@material-ui/icons/Forum';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = () => {
  const toggleMenu = () => {

  }
  return (
    <SidebarWrapper>
      <LogoWrapper>
        <Logo>
          <MenuBookIcon/>
          <LogoName>123Recipe</LogoName>
        </Logo>
        <MenuBtn><MenuIcon/></MenuBtn>
      </LogoWrapper>
      <NavList>
        <li>
          <a href="/" target="_blank">
            <SearchIcon className='searchIcon'/>
            <input type="text" name="search" placeholder="Search..."/>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="/" target="_blank">
          <PersonOutlineIcon/>
            <span>User</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="/" target="_blank">
            <ForumIcon/>
            <span>Message</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="/" target="_blank">
            <FavoriteBorderIcon/>
            <span>Saved</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="/" target="_blank">
            <ExitToAppIcon/>
            <span>Sign In</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="/" target="_blank">
            <SettingsIcon/>
            <span>Settings</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
      </NavList>
      <ProfileContent>
        <Profile>
          <ProfileDetails>
            <NameJob>
              <Name>Angelo Mabilog</Name>
              <Job>Web Developer</Job>
            </NameJob>
          </ProfileDetails>
        </Profile>
        <LogOut><ExitToAppIcon/></LogOut>
      </ProfileContent>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 240px;
  background: #11101d;
  padding: 6px 14px;
  /* color: white; */
  
  
`;

const LogoWrapper = styled.div`
 
`;

const Logo = styled.div`
  color: white;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
`;

const LogoName = styled.div`
  font-size: 20px;
  font-weight:400;
`;

const MenuBtn = styled.div`
    color: white;
    position: absolute;
    left: 90%;
    top: 6px;
    font-size: 20px;
    height: 50px;
    width: 50px;
    text-align: center; 
    line-height: 50px;
    transform:translatex(-50%);
`;

const NavList = styled.ul`
  margin-top: 20px;
  width: 100%;

  li{
    position: relative;
    height: 50px;
    width: 100%;
    margin: 0 5px;
    list-style: none;
    line-height: 50px;
    /* border-radius: 5px; */
    a{
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      width: 100%;
      padding-left: 15px;
      &:hover{
        background-color: white;
        color: #11101d;
        border-radius: 50px;
        /* transform: translateX(-5px); */
      }
      span{
        padding-left: 15px;
      }

      input{
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        border-radius: 12px;
        outline: none;
        border: none;
        padding-left: 50px;
        font-size: 18px;
        color: white;
        background: #1d1b31;
      }
      
      .searchIcon{
        position: absolute;
        /* align-items: center; */
        top: 14px;
        z-index: 99;
        color: white;
      }
    }
  }
`;


const ProfileContent = styled.div`
  position: absolute;
  color: white;
  bottom: 0;
  left: 0;

`;

const Profile = styled.div`
  position: relative;
  padding: 10px 6px;
  height: 60px;
`;

const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
`;

const NameJob = styled.div`

`;

const Name = styled.div`
  font-size: 20px;
`;

const Job = styled.div`
  font-size: 14px;
`;
const LogOut = styled.div`

`;
export default Sidebar
