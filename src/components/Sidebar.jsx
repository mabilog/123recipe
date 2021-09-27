import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import profile from '../assets/autumn (2).jpg'

import Form from './Form'

const Sidebar = ({ recipes, setRecipes, query, setQuery}) => {
  const history= useHistory();


  return (
    <SidebarWrapper>
      <LogoWrapper>
        <Logo>
          <MenuBookIcon/>
          <LogoName onClick={() => history.push('/')}>123Recipe</LogoName>
        </Logo>
      </LogoWrapper>
      <NavList>
        <li>
          <Form 
            recipes={recipes}
            setRecipes={setRecipes}
            query={query}
            setQuery={setQuery}
            />
        </li>
        <li>
          <SideLink to={'/recipes'}>
            <RestaurantMenuIcon/>
            <span>Recipes</span>
          </SideLink>
        </li>
        <li>
          <SideLink to={'/saved'}>
            <FavoriteBorderIcon/>
            <span>Favorites</span>
          </SideLink>
        </li>
      </NavList>

      <ProfileContent className="profile_content">
        <Profile>
          <ProfileDetails>
            <img src={profile} alt="profile"/>
            <div>
              <Name>Angelo Mabilog</Name>
              <Job>Web Developer</Job>
            </div>
          </ProfileDetails>
        </Profile>
      </ProfileContent>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 280px;
  background: #11101d;
  padding: 6px 14px;
  /* color: white; */
`;

const LogoWrapper = styled.div`
 cursor: pointer;
`;

const Logo = styled.div`
  color: white;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 10px;
`;

const LogoName = styled.div`
  font-size: 20px;
  font-weight:400;
  padding-left: 10px;
`;

const NavList = styled.ul`
  margin-top: 20px;
  width: 100%;
  
  li{
    position: relative;
    height: 50px;
    width: 100%;
    margin: 20px 5px;
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
      /* span{
        padding-left: 15px;
      } */
      
    }
  }
  `;
  const SideLink = styled(Link)`
    span{
      padding-left: 15px;
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
  display: flex;
`;

const ProfileDetails = styled.div`
  display: flex;
  align-items: center;

  img{
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
  }
`;

const Name = styled.div`
  font-size: 20px;
`;

const Job = styled.div`
  font-size: 12px;
`;
// const LogOut = styled.div`
//   position: absolute;
//   top: 50%;
//   right: 0;
//   transform: translateY(-50%);
//   background: #1d1b31;
//   width: 100%;
//   height: 60px;
//   line-height: 60%;
//   border-radius: 0px;
//   transition: all: 0.5s ease;
// `;
export default Sidebar
