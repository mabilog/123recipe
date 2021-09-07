import React from 'react'
import{ Link } from 'react-router-dom'
import styled from 'styled-components';

const Recipes = ({ 
  recipes,
  addFavorite,
  setRecipeId
 }) => {
  return (
    <RecipesWrapper>
      {recipes && recipes.map((recipe) => {
        return (
        <RecipeCard key={recipe.title}>
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 30)}...`}</h3>

          <button onClick={() => {
            addFavorite(recipe)
            }}
            >add to favorite</button>
          <span>
            <Link to={{ 
              pathname: `/recipe/${recipe.id}`,
              state: { id: recipe.id}
           }} onClick={() => setRecipeId(recipe.id)}>Check recipe</Link>

            </span>
        </RecipeCard>
        )
      })}
    </RecipesWrapper>
  )
}

const RecipesWrapper = styled.div`
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


const RecipeCard = styled.div`
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

export default Recipes
