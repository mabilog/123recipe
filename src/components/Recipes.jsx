import React from 'react'
import{ Link } from 'react-router-dom'
import styled from 'styled-components';

const Recipes = ({ 
  recipes,
  addFavorite,
  removeFavorite,
  // toggleFavorite
 }) => {
  console.log(recipes)
  return (
    <RecipesWrapper>
      {recipes && recipes.map((recipe) => {
        return (
        <RecipeCard key={recipe.title}>
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 30)}...`}</h3>
          <button onClick={() => addFavorite(recipe)}>add to favorite</button>
          <span>
            <Link to={{ 
              pathname: `recipe/${recipe.id}`,
              state: { 
                recipe: recipe.title,
                id: recipe.id
               }
              }}>Check recipe
              </Link>
            </span>
        </RecipeCard>
        )
      })}
    </RecipesWrapper>
  )
}

const RecipesWrapper = styled.div`
  position: relative;
  top: 60px;
  margin:auto;
  /* left: 200px; */
  font-family: sans-serif;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: auto;
  grid-auto-rows: minmax(100px, auto);
  width: calc(calc(100vw / 3) * 2) ;
  min-width: 720px;
`;


const RecipeCard = styled.div`
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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


export default Recipes
