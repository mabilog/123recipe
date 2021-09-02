import React from 'react'
import styled from 'styled-components';


const Favorites = ({ favorites, setFavorites }) => {

  return (
    <FavoriteWrapper>
      favorites component 
    </FavoriteWrapper>
  )
}

const FavoriteWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100vw;
  height: 150px;
  background-color: aliceblue;

  @media screen and (max-width: 720px){
    display: none;
  }
`;

export default Favorites
