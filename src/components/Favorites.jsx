import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Favorites = ({ 
  favorites,
  setFavorites,
  // toggleFavorite
  removeFavorite,
  setRecipeId
}) => {
  console.log(favorites);
  
  return (
    <FavoriteWrapper>
      {/* <FavoriteCard> */}
        {favorites && favorites.map(favorite => {
        return (
          <FavoriteCard>
              <FavoriteTitle>{favorite.title}</FavoriteTitle>
              <button onClick={() => removeFavorite(favorite)}>Remove from Favorite</button>
              <img src={favorite.image} alt={favorite.title}/>
              <Link to={{ pathname: `/recipe/${favorite.id}`}} onClick={setRecipeId(favorite.id)}>View</Link>
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
  justify-content: flex-start;
  align-items: center;
  bottom: 0;
  width: 100vw;
  height: 150px;
  background-color: aliceblue;
  overflow-x: auto;
`;

const FavoriteCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;

  img{
    height: 75px;
    width: 75px;
  }
`;

const FavoriteTitle = styled.h4`
  font-size: 12px;

`

export default Favorites
