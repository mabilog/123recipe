import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

const Form = ({ setRecipes, recipes, query, setQuery }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const history = useHistory();
  const getRecipe = (e) => {
      e.preventDefault();
      fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${query}`)
      .then(res => res.json())
      .then(data => {
        setRecipes(data)
        console.log(recipes)
      })
      .then(() => history.push(`/recipes/${query}`))
      .catch(err => console.log('Something went wrong ' + err))

      // history.push(`/recipes/${query}`)
    }

  const setSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value)
  }
  return (
     <FormWrapper onSubmit={getRecipe}>
       <input type="text" name="recipeName" onChange={setSearch}/>
       {/* <button type="submit">Submit</button> */}
       <SearchBtn type="submit"><SearchIcon/></SearchBtn>
     </FormWrapper>

  )
}

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 50px;

  input {
    padding: 3px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
  }
`;

const SearchBtn = styled.button`
  position: relative;
  background: none;
  border: none;
  /* right: 30px; */
`


export default Form
