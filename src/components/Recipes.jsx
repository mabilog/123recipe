import React from 'react'
import styled from 'styled-components';

const Recipes = ({ recipes }) => {
  console.log(recipes)
  return (
    <RecipesWrapper>
      {recipes.map((recipe, index) => {
        return (
        <RecipeCard key={index}>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title} />
          <span onClick={() => console.log(recipe.id)}>Check recipe</span>
        </RecipeCard>
        )
      })}
    </RecipesWrapper>
  )
}

const RecipesWrapper = styled.div`
  font-family: sans-serif;
`;


const RecipeCard = styled.div`
  margin: 0 auto;
  width: 60%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    cursor:pointer;
  }
`;


export default Recipes
