import React from 'react'
import styled from 'styled-components';
import 'boxicons';

const Sidebar = () => {
  const toggleMenu = () => {

  }
  return (
    <SidebarWrapper>
      <LogoWrapper>
        <Logo>
          <Icon><box-icon name='food-menu' color="white" /></Icon>
          <LogoName>123Recipe</LogoName>
        </Logo>
      </LogoWrapper>
      <ul className="nav_list">
        <li>
          <a href="" target="_blank">
            <box-icon name='search' />
            <input type="text" name="search" placeholder="Search..."/>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="" target="_blank">
          <box-icon name='user' ></box-icon>
            <span>User</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="" target="_blank">
            <box-icon name='chat' ></box-icon>
            <span>Message</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="" target="_blank">
            <box-icon name='log-in' ></box-icon>
            <span>Sign In</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
      </ul>
      <ProfileContent>
        <Profile>
          <ProfileDetails>
            <NameJob>
              <Name>Angelo Mabilog</Name>
              <Job>Web Developer</Job>
            </NameJob>
          </ProfileDetails>
        </Profile>
        <LogOut><box-icon name='log-out' ></box-icon></LogOut>
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

const Icon = styled.div`
  font-size: 28px;
  margin-right: 5px;
`;

const LogoName = styled.div`
  font-size: 20px;
  font-weight:400;
`;

const ProfileContent = styled.div`

`;

const Profile = styled.div`

`;

const ProfileDetails = styled.div`

`;

const NameJob = styled.div`

`;

const Name = styled.div`

`;

const Job = styled.div`

`;
const LogOut = styled.div`

`;
export default Sidebar
