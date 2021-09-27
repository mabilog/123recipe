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
              <img src={favorite.image} alt={favorite.title}/>
              <button onClick={() => removeFavorite(favorite)}>Remove from Favorite</button>
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
  margin: auto;
  font-family: sans-serif;
  display: flex;
  flex-flow: row wrap;
  max-width: 1000px;
  width: 100%;
  
  @media screen and (max-width: 780px){
    flex-direction: column;
  }
`;

const FavoriteCard = styled.div`
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  h3{
    margin: 10px;
  }

  img{
    width: 100%;
  }

  span{
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 1rem 0;
    position: relative;
    bottom: 20px;
    background-color: grey;
    color: white;
    font-family: sans-serif;
    width: 100%;
    padding: 10px;
    cursor: pointer;
  }
`;

export default Favorites
