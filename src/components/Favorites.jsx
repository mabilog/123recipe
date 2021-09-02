import React from 'react'
import styled from 'styled-components';


const Favorites = ({ 
  favorites,
  setFavorites,
  // toggleFavorite
  removeFavorite
}) => {
  console.log(favorites);
  
  return (
    <FavoriteWrapper>
      {/* <FavoriteCard> */}
        {favorites && favorites.map(favorite => {
        return (
          <FavoriteCard>
            <h4>{favorite.title}</h4>
            <button onClick={() => removeFavorite(favorite)}>Remove from favorite</button>
            <img src={favorite.image} alt={favorite.title}/>
          </FavoriteCard>
          )
            })
          }
      {/* </FavoriteCard> */}
      
    </FavoriteWrapper>
  )
}

const FavoriteWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100vw;
  height: 150px;
  background-color: aliceblue;

  @media screen and (max-width: 720px){
    display: none;
  }
`;

const FavoriteCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export default Favorites
