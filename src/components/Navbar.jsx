import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

import Form from './Form';

const Navbar = ({ 
  favorites, 
  setFavorites, 
  recipes, 
  setRecipes, 
  query, 
  setQuery }) => {
  const history = useHistory();
  const goHome = () => {
    history.push('/')
    // setQuery('')
    // setRecipes('')
  }
 
  return (
    <NavbarWrapper>
      <Title onClick={goHome}>Recipe Search</Title>
      <Form 
        recipes={recipes}
        setRecipes={setRecipes}
        favorites={favorites}
        setFavorites={setFavorites}
        query={query}
        setQuery={setQuery}
        />
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: darkblue;
  z-index: 3;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: sans-serif;
  height: 60px;
  color: white;
  cursor: pointer;
`;

export default Navbar
