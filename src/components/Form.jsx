import React from 'react'
import styled from 'styled-components'

const Form = ({ setRecipes, recipes }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getRecipe = (e) => {
      e.preventDefault();
      const query = e.target.recipeName.value;

      fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${query}`)
      .then(res => res.json())
      .then(data => {
        setRecipes(data)
        console.log(recipes)
        console.log(data)
      })
      .catch(err => console.log('Something went wrong ' + err))
    }

  return (
     <FormWrapper onSubmit={getRecipe}>
       <input type="text" name="recipeName"/>
       <button type="submit">Submit</button>
     </FormWrapper>

  )
}

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;

  input {
    padding: 3px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid black;
  }
`;


export default Form
