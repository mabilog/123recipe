import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Favorites = ({ 
  favorites,
  // setFavorites,
  removeFavorite,
  setRecipeId
}) => {
  
  return (
    <FavoriteWrapper id='favorite__wrapper'>
        {favorites && favorites.map(favorite => {
        return (
          <FavoriteCard>
              <h3>{favorite.title}</h3>
              <button onClick={() => removeFavorite(favorite)}>Remove from Favorite</button>
              <img src={favorite.image} alt={favorite.title}/>
              <Link to={{ pathname: `/recipe/${favorite.id}`}} onClick={setRecipeId(favorite.id)}>View</Link>
          </FavoriteCard>
          )
            })
          }
      
    </FavoriteWrapper>
  )
}

const FavoriteWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  width: 100%;
  height: 100vh;
  
`;

const FavoriteCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;

  h3{
    font-size: 16px;
    
  }
  img{
    height: 150px;
    width: 150px;
  }
`;

export default Favorites
