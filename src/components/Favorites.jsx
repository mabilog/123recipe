import React, { useEffect } from 'react'
import styled from 'styled-components';


const Favorites = ({ favorites, setFavorites }) => {

  return (
    <FavoriteWrapper>
      favorites component new branch
    </FavoriteWrapper>
  )
}

const FavoriteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  left: 0;
  max-width: 200px;
  width: calc(100vw / 3);
  height: 100vh;

  @media screen and (max-width: 720px){
    display: none;
  }
`;

export default Favorites
