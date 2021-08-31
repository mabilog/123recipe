import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'

const Recipe = ({match}) => {
  const [recipe, setRecipe] = useState([]);
  const recipeId = match.params.id;
  const API_KEY = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setRecipe(res)
    })
    // .then(data => setRecipe(data))
    .catch(err => console.log("Something went wrong while fetching recipe info " + err))
  }, [])

  
  return (
    <RecipeWrapper>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title}/>
      <h4>Summary</h4>
      <p dangerouslySetInnerHTML={{ __html: recipe.summary}}></p>
    </RecipeWrapper>
  )
}

const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80vw;
  min-width: 480px;
`;
export default Recipe
