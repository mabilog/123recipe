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
  
  const toggleClassName = () => {
    const element = document.getElementById('favorite__wrapper');
    element.classList.toggle('active');
  }
  return (
    <FavoriteWrapper id='favorite__wrapper'>
      <ToggleBtn onClick={toggleClassName}>X</ToggleBtn>
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
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* bottom: 0; */
  width: 100vw;
  height: 150px;
  background-color: aliceblue;
  overflow-x: auto;

  
`;

const ToggleBtn = styled.button`
 position: relative;
 top: -8px;
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
