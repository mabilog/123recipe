import React from 'react'
import styled from 'styled-components';

const Recipes = ({ recipes }) => {
  return (
    <RecipesWrapper>
      {recipes.map(recipe => {
        return <p>{recipe.title}</p>
      })}
    </RecipesWrapper>
  )
}

const RecipesWrapper = styled.div``;

export default Recipes
