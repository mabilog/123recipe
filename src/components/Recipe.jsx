import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Recipe = ({match}) => {
  const [recipe, setRecipe] = useState([]);
  const recipeId = match.params.id;
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(res => {
      setRecipe(res)
    })
    .catch(err => console.log("Something went wrong while fetching recipe info " + err))
  }, [])

  
  return (
    <RecipeWrapper>
      { recipe.length !== 0 && 
        <>
          <Title>{recipe.title}</Title>
          <Image src={recipe.image} alt={recipe.title}/>
          <Summary>Summary</Summary>
          <p dangerouslySetInnerHTML={{ __html: recipe.summary}}></p>
          <FavoriteBtn>Add to favorite</FavoriteBtn>
          <HomeBtn to='/'>Go Home</HomeBtn>
        </>
      }
      
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
  font-family: sans-serif;
`;

const Title = styled.h3`
  padding: 10px;
  font-size: 36px;
`;

const Image = styled.img`
  margin-bottom: 60px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px;
`;

const Summary = styled.h4`
  font-size: 28px; 
  margin-bottom: 20px;
`;

const FavoriteBtn = styled.button`
  padding: 3px 6px;
  background: none;
  border: 1px solid orange;
`;

const HomeBtn = styled(Link)`
  padding: 3px 6px;
  background: none;
  border: 1px solid orange;
`;
export default Recipe
